import {Parser} from "expr-eval";

export const calc = function (formula: string): number {
    return Parser.evaluate(formula);
};