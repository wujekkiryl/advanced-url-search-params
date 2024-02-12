import { Filter } from "./interfaces/filter";
import { Pagination } from "./interfaces/pagination";
import { Sorting } from "./interfaces/sorting";
import { parseFilters, parsePagination, parseSorting } from "./parsers";

export interface AdvancedUrlSearchParamsInterface {
  filters: Filter[];
  pagination: Pagination;
  sorting: Sorting[];
}

export class AdvancedUrlSearchParams
  implements AdvancedUrlSearchParamsInterface
{
  private readonly _filters: Filter[];
  private readonly _pagination: Pagination;
  private readonly _sorting: Sorting[];

  get filters(): Filter[] {
    return this._filters;
  }
  get pagination(): Pagination {
    return this._pagination;
  }
  get sorting(): Sorting[] {
    return this._sorting;
  }
  constructor(searchParams: string) {
    let params: URLSearchParams;
    try {
      const url = new URL(searchParams);
      params = new URLSearchParams(url.search);
    } catch (error) {
      params = new URLSearchParams(searchParams);
    }
    this._pagination = parsePagination(params);
    this._sorting = parseSorting(params);
    this._filters = parseFilters(params);
  }
}
