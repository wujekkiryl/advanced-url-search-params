import { FilterRule } from "../enums/filterRule";

export interface Filter {
  column: string;
  value: string;
  rule: FilterRule;
}
