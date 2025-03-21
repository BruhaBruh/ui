import {
  Button,
  Checkbox,
  Menu,
  MenuContent,
  MenuItem,
  MenuItemLeft,
  MenuTrigger,
  NumberField,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from '@/components';
import type React from 'react';
import type { Key } from 'react-aria';
import { Label, Text } from '../typography';
import type { Argument } from './story-playground-context';
import { useStoryPlayground } from './story-playground-context';

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

  const onChangeRadio = (opt: string) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: opt,
      },
    }));
  };

  const onChangeText = (value: string) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: value,
      },
    }));
  };

  const onChangeNumber = (value: number) => {
    // const value = e.target.value;
    // if (!/^\d+(.\d+)?$/.test(value)) return;

    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: value,
      },
    }));
  };

  const onChangeSelect = (v: Key) => {
    setState((p) => ({
      ...p,
      values: {
        ...p.values,
        [name]: v as string,
      },
    }));
  };

  const controlId = `control-${arg.label}-${name}`;

  return (
    <section>
      {arg.type !== 'text' && arg.type !== 'number' && (
        <Label className="block" asChild>
          <label htmlFor={controlId}>{arg.label || name}</label>
        </Label>
      )}
      {arg.type === 'switch' && (
        <Switch
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
        <RadioGroup onChange={onChangeRadio}>
          {Array.from(new Set(arg.options)).map((opt) => (
            <Radio key={opt} value={opt}>
              {opt}
            </Radio>
          ))}
        </RadioGroup>
      )}
      {arg.type === 'text' && (
        <TextField
          id={controlId}
          label={arg.label || name}
          type="text"
          value={currentValue as string}
          onChange={onChangeText}
        />
      )}
      {arg.type === 'number' && (
        <NumberField
          id={controlId}
          label={arg.label || name}
          defaultValue={currentValue as number}
          onChange={onChangeNumber}
        />
      )}
      {arg.type === 'select' && (
        <Menu>
          <MenuTrigger>
            <Button variant="outlined" color="secondary" id={controlId}>
              {currentValue as string}
            </Button>
          </MenuTrigger>
          <MenuContent
            selectedKeys={[currentValue as string]}
            selectionMode="single"
            onAction={onChangeSelect}
          >
            {Array.from(new Set(arg.options)).map((option) => (
              <MenuItem key={option}>
                <MenuItemLeft>
                  <span />
                </MenuItemLeft>
                {option}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu>
      )}
      {arg.description && <Text>{arg.description}</Text>}
    </section>
  );
};
