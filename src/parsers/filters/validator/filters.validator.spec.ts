import { validateFilters } from "./filters.validator";

import { FilterRule } from "../../../enums/filterRule";

test("Should return true when proper filter has been passed", () => {
  const property = "name";
  const rule = FilterRule.Equal;
  const value = "john";
  expect(validateFilters(property, rule, value)).toBeTruthy();
});

test("Should return false when filter rule is not matching enum value", () => {
  const property = "name";
  const rule = "someRule" as FilterRule;
  const value = "john";
  expect(validateFilters(property, rule, value)).toBeFalsy();
});
test("Should throw error when empty value has been passed to filter rule which requires a value", () => {
  const property = "name";
  const rule = FilterRule.Equal;

  expect(() => validateFilters(property, rule)).toThrow();
});

test("Should throw error when value has been passed to filter rule which not expects any value", () => {
  const property = "name";
  const rule = FilterRule.IsNull;
  const value = "john";
  expect(() => validateFilters(property, rule, value)).toThrow();
});
