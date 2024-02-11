import { parsePagination } from "./pagination.parser";
test("Should return pagination object from URLSearchParams object", () => {
  const urlParams = new URLSearchParams("page=1&size=10");
  const pagination = parsePagination(urlParams);
  expect(pagination).toBeDefined();
});
test("Should return empty pagination with undefined params when no query params are passed", () => {
  const urlParams = new URLSearchParams();
  const pagination = parsePagination(urlParams);
  expect(pagination.page).toBeUndefined();
  expect(pagination.size).toBeUndefined();
});
test("Should return pagination object with undefined size when no size query param is passed", () => {
  const urlParams = new URLSearchParams("page=1");
  const pagination = parsePagination(urlParams);
  expect(pagination.size).toBeUndefined();
});
test("Should return pagination object with undefined page when no page query param is passed", () => {
  const urlParams = new URLSearchParams("size=10");
  const pagination = parsePagination(urlParams);
  expect(pagination.page).toBeUndefined();
});
test("Should throw error when incorrect pagination page value is passed", () => {
  const urlParams = new URLSearchParams("page=one");
  expect(() => parsePagination(urlParams)).toThrow();
});
test("Should throw error when incorrect pagination size value is passed", () => {
  const urlParams = new URLSearchParams("size=ten");
  expect(() => parsePagination(urlParams)).toThrow();
});
