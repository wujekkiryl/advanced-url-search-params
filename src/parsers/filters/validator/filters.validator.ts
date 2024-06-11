// const filtersThatRequiresValue

import { FilterRule } from "../../../enums/filterRule";
export function validateFilters(
  property: string,
  rule: FilterRule,
  value?: string,
): boolean {
  const rulesThatRequiresValue = [
    FilterRule.Equal,
    FilterRule.NotEqual,
    FilterRule.GreaterThan,
    FilterRule.GreaterThanOrEqual,
    FilterRule.LessThan,
    FilterRule.LessThanOrEqual,
    FilterRule.Contains,
    FilterRule.NotContains,
    FilterRule.StartsWith,
    FilterRule.EndsWith,
    FilterRule.In,
    FilterRule.NotIn,
    FilterRule.Between,
    FilterRule.NotBetween,
    FilterRule.Has,
    FilterRule.HasEvery,
    FilterRule.HasSome,
  ];
  const rulesThatNotExpectsValue = [
    FilterRule.IsNull,
    FilterRule.IsNotNull,
    FilterRule.IsEmpty,
    FilterRule.IsNotEmpty,
    FilterRule.IsTrue,
    FilterRule.IsFalse,
  ];
  if (!Object.values(FilterRule).includes(rule)) {
    return false;
  }
  if (rulesThatRequiresValue.includes(rule) && !value) {
    throw new Error(
      `Rule ${rule} for property ${property} does requires value`,
    );
  }
  if (rulesThatNotExpectsValue.includes(rule) && value) {
    throw new Error(
      `Rule ${rule} for property ${property} does not expects any value`,
    );
  }
  return true;
}
