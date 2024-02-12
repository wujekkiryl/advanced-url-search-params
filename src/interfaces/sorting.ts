import { SortingDirection } from "../enums/sortingDirection";

export interface Sorting {
  column: string;
  direction: SortingDirection;
}
