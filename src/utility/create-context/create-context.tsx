import { deepEqual } from 'fast-equals';
import React from 'react';
import {
  ContextOptions,
  Selector,
  StoreSetFn,
  StoreState,
} from './create-context.types';

const storeNameRegExp = /^[a-z][a-z0-9]*$/i;

export const createContext = <T extends object>(
  defaultState: T,
  options: ContextOptions = {},
) => {
  const { storeName = 'undefined', compareFn = deepEqual } = options;

  if (!storeNameRegExp.test(storeName)) {
    throw Error('Store name is invalid');
  }
  const capitalizedStoreName =
    storeName.charAt(0).toUpperCase() + storeName.slice(1);

  const useStoreState = (state: T): StoreState<T> => {
    const store = React.useRef(state);
    const subscribers = React.useRef(new Set<() => void>());
    const get = React.useCallback(() => store.current, []);
    const set = React.useCallback((value: Partial<T>) => {
      const newState = { ...store.current, ...value };
      if (compareFn(store.current, newState)) return;
      store.current = newState;
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

  const StoreContext = React.createContext<StoreState<T> | null>(null);

  const Provider: React.FC<{
    value?: T;
    children: React.ReactNode;
  }> = ({ value = defaultState, children }) => {
    const store = useStoreState(value);

    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };
  Provider.displayName = `${capitalizedStoreName}Provider`;

  const defaultSelector: Selector<T, T> = (s) => s;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const useStore = <_ extends T = T, Return = T>(
    selectorParam?: Selector<T, Return>,
  ): [Return, StoreSetFn<T>] => {
    const store = React.useContext(StoreContext);
    if (!store) {
      throw Error(`Store "${storeName}" not found`);
    }

    const selector = React.useCallback(
      (s: T): Return => {
        if (selectorParam) return selectorParam(s);
        return defaultSelector(s) as unknown as Return;
      },
      [selectorParam],
    );

    const selectedState = React.useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(defaultState),
    );

    const setFn: StoreSetFn<T> = (valueOrFn) => {
      if (typeof valueOrFn === 'function') {
        const newValue = valueOrFn(store.get());
        store.set(newValue);
      } else {
        store.set(valueOrFn);
      }
    };

    return [selectedState, setFn];
  };

  const useHasStore = () => {
    const store = React.useContext(StoreContext);

    return Boolean(store);
  };

  const useSetStore = (): StoreSetFn<T> => {
    const store = React.useContext(StoreContext);
    if (!store) {
      throw Error(`Store "${storeName}" not found`);
    }

    const setFn: StoreSetFn<T> = (valueOrFn) => {
      if (typeof valueOrFn === 'function') {
        const newValue = valueOrFn(store.get());
        store.set(newValue);
      } else {
        store.set(valueOrFn);
      }
    };

    return setFn;
  };

  const ProviderWithDepend: typeof Provider = ({ value, children }) => {
    const hasStore = useHasStore();

    if (hasStore) return children;

    return <Provider value={value}>{children}</Provider>;
  };
  ProviderWithDepend.displayName = `${capitalizedStoreName}ProviderWithDepend`;

  return {
    Provider,
    ProviderWithDepend,
    useStore,
    useHasStore,
    useSetStore,
  };
};
