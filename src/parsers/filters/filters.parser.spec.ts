import { parseFilters } from "./filters.parser";

test("Should create array of filters from URLSearchParams object", () => {
  const urlParams = new URLSearchParams(
    "name:in=John&age:gt=30&birthdate:gt=1990-01-01&birthdate:lt=1995-01-01&isActive:eq=true",
  );
  const filters = parseFilters(urlParams);
  expect(filters).toBeDefined();
});
test("Should return empty filters array when no query params are passed", () => {
  const urlParams = new URLSearchParams();
  const filters = parseFilters(urlParams);
  expect(filters.length).toEqual(0);
});

test("Should omit filters with invalid rule", () => {
  const urlParams = new URLSearchParams("name:isNotSameAs=John&age:gt=30");
  const filters = parseFilters(urlParams);
  expect(filters.length).toEqual(1);
});
