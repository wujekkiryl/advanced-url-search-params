import { extractSortingFromParams } from "./sorting.extractor";
test("Should extract sorting params from search params", () => {
  const urlParams = new URLSearchParams("sort=name&price:gt=100");
  const paramsWithoutSorting = extractSortingFromParams(urlParams);
  expect(paramsWithoutSorting.get("price")).toBeDefined();
  expect(paramsWithoutSorting.get("sort")).toBeNull();
});
test("Should not change URLSearchParams object when no sorting params are passed", () => {
  const urlParams = new URLSearchParams("name:eq=John&age:eq=30");
  const paramsWithoutSorting = extractSortingFromParams(urlParams);
  expect(paramsWithoutSorting.toString()).toEqual("name%3Aeq=John&age%3Aeq=30");
});
