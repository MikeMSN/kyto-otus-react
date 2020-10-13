import {calc} from "./calc";

test("calc (2 + 2) * 2 = 8", () => {
    expect(calc('(2 + 2) * 2 ')).toBe(8);
});