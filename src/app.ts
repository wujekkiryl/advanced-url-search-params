import { Filter } from "./types/filter";
import { Pagination } from "./types/pagination";
import { Sorting } from "./types/sorting";
import { parseFilters, parsePagination, parseSorting } from "./parsers";
import { extractPaginationFromParams } from "./extractors/pagination/pagination.extractor";
import { extractSortingFromParams } from "./extractors/sorting/sorting.extractor";

export class AdvancedUrlSearchParams {
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
    params = extractPaginationFromParams(params);
    this._sorting = parseSorting(params);
    params = extractSortingFromParams(params);
    this._filters = parseFilters(params);
  }
}
