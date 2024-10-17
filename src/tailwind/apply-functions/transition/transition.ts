import { ApplyUIPlugin } from '../../ui-plugin.types';
import { defaultDurationValuesObject } from '../material-durations';
import { defaultEasingValuesObject } from '../material-easings';

const hasInDefaultDurationValues = (
  key: string,
): key is keyof typeof defaultDurationValuesObject => {
  return Object.keys(defaultDurationValuesObject).includes(key);
};

const hasInDefaultEasingValues = (
  key: string,
): key is keyof typeof defaultEasingValuesObject => {
  return Object.keys(defaultEasingValuesObject).includes(key);
};

export const applyTransition: ApplyUIPlugin = ({ matchUtilities }) => {
  matchUtilities({
    transition: (value) => {
      const values = value
        .split('+')
        .filter((v) => v.length > 0)
        .flatMap((item) => {
          const [properties, rawDuration, rawEasing, rawDelay] =
            item.split(' ');

          let easing = rawEasing;
          if (hasInDefaultEasingValues(easing)) {
            easing = defaultEasingValuesObject[easing];
          }

          let duration = rawDuration;
          if (hasInDefaultDurationValues(duration)) {
            duration = defaultDurationValuesObject[duration];
          }

          if (rawDelay === undefined)
            return properties
              .split(',')
              .map((property) => `${property} ${easing} ${duration}`);

          let delay = rawDelay;
          if (hasInDefaultDurationValues(delay)) {
            delay = defaultDurationValuesObject[delay];
          }

          return properties
            .split(',')
            .map((property) => `${property} ${easing} ${duration} ${delay}`);
        });
      return {
        transition: values.join(', '),
      };
    },
  });
};
