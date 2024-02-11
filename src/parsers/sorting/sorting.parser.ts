import { validateSorting } from "./validator/sorting.validator";
import { SortingDirection } from "../../enums/sortingDirection";
import { Sorting } from "../../types/sorting";

export function parseSorting(searchParams: URLSearchParams): Sorting[] {
  const sorting: Sorting[] = [];
  const sort = searchParams.get("sort");
  if (sort) {
    if (!validateSorting(sort)) {
      throw new Error(`Invalid sorting value ${sort}`);
    }
    const columns = sort.split(",");
    if (columns.length) {
      columns.forEach((column) => {
        if (column.startsWith("-")) {
          sorting.push({
            column: column.substring(1),
            direction: SortingDirection.Desc,
          });
        } else {
          sorting.push({
            column,
            direction: SortingDirection.Asc,
          });
        }
      });
    }
  }
  return sorting;
}
