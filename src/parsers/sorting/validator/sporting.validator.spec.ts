import { validateSorting } from "./sorting.validator";
test("Should return true when valid sorting value is passed", () => {
  const sorting = "name";
  expect(validateSorting(sorting)).toBeTruthy();
});
test("Should return true when valid multiple sorting values are passed", () => {
  const sorting = "name,price";
  expect(validateSorting(sorting)).toBeTruthy();
});

test("Should throw error when unknown character is passed at the beginning of value", () => {
  const sorting = "#name";
  expect(() => validateSorting(sorting)).toThrow();
});
test("Should throw error when empty string is passed", () => {
  const sorting = "";
  expect(() => validateSorting(sorting)).toThrow();
});

test("Should throw error when column name is doubled", () => {
  const sorting = "name,price,name";
  expect(() => validateSorting(sorting)).toThrow();
});
