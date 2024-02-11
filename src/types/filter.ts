import { FilterRule } from "../enums/filterRule";

export type Filter = {
  column: string;
  value: string;
  rule: FilterRule;
};
