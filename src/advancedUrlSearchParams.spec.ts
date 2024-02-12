import { AdvancedUrlSearchParams } from "./advancedUrlSearchParams";
import { SortingDirection } from "./enums/sortingDirection";

test("Should create pagination object, filters and sort arrays from URLSearchParams object", () => {
  const searchParams = "page=1&size=10&sort=field1&field1:eq=1";
  const advancedUrlSearchParams = new AdvancedUrlSearchParams(searchParams);
  expect(advancedUrlSearchParams.pagination).toBeDefined();
  expect(advancedUrlSearchParams.pagination.page).toBe(1);
  expect(advancedUrlSearchParams.pagination.size).toBe(10);
  expect(advancedUrlSearchParams.sorting).toBeDefined();
  expect(advancedUrlSearchParams.sorting.length).toBe(1);
  expect(advancedUrlSearchParams.sorting[0].column).toBe("field1");
  expect(advancedUrlSearchParams.sorting[0].direction).toBe(
    SortingDirection.Asc,
  );
  expect(advancedUrlSearchParams.filters).toBeDefined();
  expect(advancedUrlSearchParams.filters.length).toBe(1);
  expect(advancedUrlSearchParams.filters[0].column).toBe("field1");
  expect(advancedUrlSearchParams.filters[0].value).toBe("1");
});

test("Should create pagination object, filters and sort arrays from URL string", () => {
  const url = "http://localhost/search?page=1&size=10&sort=field1&field1:eq=1";
  const advancedUrlSearchParams = new AdvancedUrlSearchParams(url);
  expect(advancedUrlSearchParams.pagination).toBeDefined();
  expect(advancedUrlSearchParams.pagination.page).toBe(1);
  expect(advancedUrlSearchParams.pagination.size).toBe(10);
  expect(advancedUrlSearchParams.sorting).toBeDefined();
  expect(advancedUrlSearchParams.sorting.length).toBe(1);
  expect(advancedUrlSearchParams.sorting[0].column).toBe("field1");
  expect(advancedUrlSearchParams.sorting[0].direction).toBe(
    SortingDirection.Asc,
  );
  expect(advancedUrlSearchParams.filters).toBeDefined();
  expect(advancedUrlSearchParams.filters.length).toBe(1);
  expect(advancedUrlSearchParams.filters[0].column).toBe("field1");
  expect(advancedUrlSearchParams.filters[0].value).toBe("1");
});

test("Should create pagination object, filters and sort arrays from relative path of URL", () => {
  const url = "/search?page=1&size=10&sort=field1&field1:eq=1";
  const advancedUrlSearchParams = new AdvancedUrlSearchParams(url);
  expect(advancedUrlSearchParams.pagination).toBeDefined();
  expect(advancedUrlSearchParams.pagination.page).toBe(1);
  expect(advancedUrlSearchParams.pagination.size).toBe(10);
  expect(advancedUrlSearchParams.sorting).toBeDefined();
  expect(advancedUrlSearchParams.sorting.length).toBe(1);
  expect(advancedUrlSearchParams.sorting[0].column).toBe("field1");
  expect(advancedUrlSearchParams.sorting[0].direction).toBe(
    SortingDirection.Asc,
  );
  expect(advancedUrlSearchParams.filters).toBeDefined();
  expect(advancedUrlSearchParams.filters.length).toBe(1);
  expect(advancedUrlSearchParams.filters[0].column).toBe("field1");
  expect(advancedUrlSearchParams.filters[0].value).toBe("1");
});
