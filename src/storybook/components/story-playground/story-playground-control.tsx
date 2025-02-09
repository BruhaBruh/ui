import { Checkbox } from '@/components';
import React from 'react';
import { Label, Text } from '../typography';
import { Argument, useStoryPlayground } from './story-playground-context';

export const StoryPlaygroundControl: React.FC<{
  name: string;
  arg: Argument;
}> = ({ name, arg }) => {
  const [state, setState] = useStoryPlayground();
  const currentValue = state.values[name];

  const onChangeSwitch = (isSelected: boolean) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: isSelected,
      },
    }));
  };

  const onChangeCheckbox = (opt: string) => (isSeleceted: boolean) => {
    setState((p) => {
      const newValue = ((p.values[name] as string[]) || []).filter(
        (v) => v !== opt,
      );

      if (isSeleceted) newValue.push(opt);

      return {
        ...p,
        values: {
          ...p.values,
          [name]: newValue,
        },
      };
    });
  };

  const onChangeRadio =
    (opt: string): React.ChangeEventHandler<HTMLInputElement> =>
    () => {
      setState((p) => ({
        ...p,
        values: {
          ...p.values,
          [name]: opt,
        },
      }));
    };

  const onChangeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: e.target.value,
      },
    }));
  };

  const onChangeNumber: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (!/^\d+(.\d+)?$/.test(value)) return;

    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: Number.parseFloat(value),
      },
    }));
  };

  const onChangeSelect: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: e.target.value,
      },
    }));
  };

  const controlId = `control-${arg.label}-${name}`;

  return (
    <section>
      <Label className="block" asChild>
        <label htmlFor={controlId}>{arg.label || name}</label>
      </Label>
      {arg.type === 'switch' && (
        <Checkbox
          id={controlId}
          isSelected={currentValue as boolean}
          onChange={onChangeSwitch}
        />
      )}
      {arg.type === 'checkbox' && (
        <section className="grid grid-cols-2 gap-sm">
          {Array.from(new Set(arg.options)).map((opt) => (
            <Checkbox
              key={opt}
              isSelected={(currentValue as string[]).includes(opt)}
              onChange={onChangeCheckbox(opt)}
            >
              {opt}
            </Checkbox>
          ))}
        </section>
      )}
      {arg.type === 'radio' && (
        <section className="grid grid-cols-2 gap-sm">
          {Array.from(new Set(arg.options)).map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2xs typography-label-large"
            >
              <input
                type="radio"
                name={`${name}-arg`}
                checked={currentValue === opt}
                onChange={onChangeRadio(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </section>
      )}
      {arg.type === 'text' && (
        <input
          id={controlId}
          className="h-10 rounded-md px-md typography-label-large"
          type="text"
          value={currentValue as string}
          onChange={onChangeText}
        />
      )}
      {arg.type === 'number' && (
        <input
          id={controlId}
          className="h-10 rounded-md px-md typography-label-large"
          type="text"
          inputMode="numeric"
          defaultValue={currentValue as string}
          onChange={onChangeNumber}
        />
      )}
      {arg.type === 'select' && (
        <select
          id={controlId}
          className="h-10 appearance-none rounded-md px-md text-center typography-label-large"
          onChange={onChangeSelect}
          value={currentValue as string}
        >
          {Array.from(new Set(arg.options)).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {arg.description && <Text>{arg.description}</Text>}
    </section>
  );
};
