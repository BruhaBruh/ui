import React from 'react';

type Selector<State, R> = (store: State) => R;

type StoreSetter<S> = (value: Partial<S> | ((prev: S) => Partial<S>)) => void;

export type UseStoreAction<S> = <Return = S>(
  selector?: Selector<S, Return>,
) => [Return, StoreSetter<S>];

export const createFastContext = <T extends object>(globalInitialState: T) => {
  const useCreateStore = (initialState: T) => {
    const store = React.useRef(initialState);
    const get = React.useCallback(() => store.current, []);
    const subscribers = React.useRef(new Set<() => void>());
    const set = React.useCallback((value: Partial<T>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);
    const subscribe = React.useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  };

  type CreateStoreReturnType = ReturnType<typeof useCreateStore>;

  const StoreContext = React.createContext<CreateStoreReturnType | null>(null);

  const Provider: React.FC<{
    value: T;
    children: React.ReactNode;
  }> = ({ value, children }) => {
    const store = useCreateStore(value);

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

  const useStore = <State extends T, Return = State>(
    selector?: Selector<State, Return>,
  ): [Return, StoreSetter<State>] => {
    const store = React.useContext(StoreContext);
    if (!store) {
      throw new Error('Store not found');
    }
    const sel =
      selector || (((s: State) => s) as unknown as Selector<State, Return>);

    const state = React.useSyncExternalStore(
      store.subscribe,
      () => sel(store.get() as State),
      () => sel(globalInitialState as State),
    );

    const setter: StoreSetter<State> = (value) => {
      if (typeof value === 'function') {
        const newValue = value(store.get() as State);
        store.set(newValue);
      } else {
        store.set(value);
      }
    };

    return [state, setter as StoreSetter<State>];
  };

  return {
    Provider,
    useStore,
  };
};
