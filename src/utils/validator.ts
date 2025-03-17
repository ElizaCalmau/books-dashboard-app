import {ValidationConditions} from "../constants.ts";

export const validator = ({value, conditions}: {value: string, conditions: ValidationConditions}) => {
    const {min, max, errorMessage} = conditions;

    if (value.length < min) {
        console.log(`${errorMessage} be less than ${min} characters.`);
        return false;
    } else if (value.length > max) {
        console.log(`${errorMessage} be more than ${max} characters.`);
        return false;
    }

    return true;
};