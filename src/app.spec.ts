import { AdvancedUrlSearchParams } from "./app";

test("Should create array of filters from URL params string", () => {
  const urlParams =
    "name:in=John&age:gt=30&birthdate:gt=1990-01-01&birthdate:lt=1995-01-01&isActive:eq=true";
  const queryParamsParser = new AdvancedUrlSearchParams(urlParams);
  expect(queryParamsParser.filters).toBeDefined();
});
test("Should create empty sorting array, empty filters array and pagination with undefined params when no query params are passed", () => {
  const url = "https://example.com";
  const queryParamsParser = new AdvancedUrlSearchParams(url);
  const sorting = queryParamsParser.sorting;
  const pagination = queryParamsParser.pagination;
  const filters = queryParamsParser.filters;
  expect(sorting.length).toEqual(0);
  expect(pagination.page).toBeUndefined();
  expect(pagination.size).toBeUndefined();
  expect(filters.length).toEqual(0);
});

test("Should create array of sorting and filters and pagination object from URL string", () => {
  const url =
    "https://example.com?sort=name&startDate:ge=2020-01-01&endDate:le=2020-01-01&page=1&size=10";
  const queryParamsParser = new AdvancedUrlSearchParams(url);
  const sorting = queryParamsParser.sorting;
  const filters = queryParamsParser.filters;
  const pagination = queryParamsParser.pagination;
  expect(sorting.length).toEqual(1);
  expect(filters.length).toEqual(2);
  expect(pagination.page).toEqual(1);
  expect(pagination.size).toEqual(10);
});

test("Should throw error when string is not a valid URL and not valid query params", () => {
  const url = "notValidUrl";
  expect(() => new AdvancedUrlSearchParams(url)).toThrow();
});
