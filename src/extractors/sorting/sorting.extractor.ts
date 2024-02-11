export function extractSortingFromParams(
  searchParams: URLSearchParams,
): URLSearchParams {
  const sorting = searchParams.get("sort");
  const newSearchParams = new URLSearchParams(searchParams.toString());
  if (sorting) {
    newSearchParams.delete("sort");
  }
  return newSearchParams;
}
