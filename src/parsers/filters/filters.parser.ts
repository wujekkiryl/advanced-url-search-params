import { validateFilters } from "./validator/filters.validator";
import { FilterRule } from "../../enums/filterRule";
import { Filter } from "../../types/filter";

export function parseFilters(searchParams: URLSearchParams): Filter[] {
  const filters: Filter[] = [];
  searchParams.forEach((value, key) => {
    const [property, rule] = key.split(":");
    if (property && rule) {
      if (validateFilters(property, rule as FilterRule, value)) {
        filters.push({
          column: property,
          rule: rule as FilterRule,
          value,
        });
      }
    }
  });
  return filters;
}
