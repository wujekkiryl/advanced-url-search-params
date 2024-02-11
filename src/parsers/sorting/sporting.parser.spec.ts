import { parseSorting } from "./sorting.parser";

import { SortingDirection } from "../../enums/sortingDirection";
test("Should create sorting object from URLSearchParams object", () => {
  const urlParams = new URLSearchParams("sort=birthdate");
  const sorting = parseSorting(urlParams);
  expect(sorting).toBeDefined();
});
test("Should return sorting object from URLSearchParams object with ascending sorting", () => {
  const urlParams = new URLSearchParams("sort=birthdate");
  const sorting = parseSorting(urlParams)[0];
  expect(sorting).toBeDefined();
  expect(sorting?.direction).toEqual(SortingDirection.Asc);
});
test("Should return sorting object from URLSearchParams object with descending sorting", () => {
  const urlParams = new URLSearchParams("sort=-birthdate");
  const sorting = parseSorting(urlParams)[0];
  expect(sorting).toBeDefined();
  expect(sorting?.direction).toEqual(SortingDirection.Desc);
});

test("Should return sorting object from URLSearchParams object with multiple sorting", () => {
  const urlParams = new URLSearchParams("sort=name,birthdate");
  const sorting = parseSorting(urlParams);
  expect(sorting.length).toEqual(2);
});

test("Should return empty sorting array when no query params are passed", () => {
  const urlParams = new URLSearchParams();
  const sorting = parseSorting(urlParams);
  expect(sorting.length).toEqual(0);
});

test("Should throw error when incorrect sorting value is passed", () => {
  const urlParams = new URLSearchParams("sort=#name");
  expect(() => parseSorting(urlParams)).toThrowError();
});
