import { materialDuration, materialEasing } from '@/config';
import { ApplyUIPlugin } from '../../ui-plugin.types';

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
          if (materialEasing.has(easing)) {
            easing = materialEasing.asString(easing);
          }

          let duration = rawDuration;
          if (materialDuration.has(duration)) {
            duration = materialDuration.asString(duration);
          }

          if (rawDelay === undefined)
            return properties
              .split(',')
              .map((property) => `${property} ${easing} ${duration}`);

          let delay = rawDelay;
          if (materialDuration.has(delay)) {
            delay = materialDuration.asString(delay);
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
