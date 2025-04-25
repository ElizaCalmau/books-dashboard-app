import { ValidationConditions } from '../lib/constants.ts';

export const validator = ({
  value,
  conditions,
}: {
  value: string;
  conditions: ValidationConditions;
}) => {
  const { min, max, errorMessage } = conditions;

  if (value.length < min) {
    return `${errorMessage} be less than ${min} characters.`;
  } else if (value.length > max) {
    return `${errorMessage} be more than ${max} characters.`;
  }
};
