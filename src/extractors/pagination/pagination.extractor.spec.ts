import { extractPaginationFromParams } from "./pagination.extractor";

test("Should extract pagination params from search params", () => {
  const urlParams = new URLSearchParams("page=1&size=10&price:gt=100");
  const paramsWithoutPagination = extractPaginationFromParams(urlParams);
  expect(paramsWithoutPagination.get("price")).toBeDefined();
  expect(paramsWithoutPagination.get("page")).toBeNull();
  expect(paramsWithoutPagination.get("size")).toBeNull();
});
test("Should not change URLSearchParams object when no sorting params are passed", () => {
  const urlParams = new URLSearchParams("name:eq=John&age:eq=30");
  const paramsWithoutPagination = extractPaginationFromParams(urlParams);
  expect(paramsWithoutPagination.toString()).toEqual(
    "name%3Aeq=John&age%3Aeq=30",
  );
});
