export function extractPaginationFromParams(
  searchParams: URLSearchParams,
): URLSearchParams {
  const page = searchParams.get("page");
  const size = searchParams.get("size");
  const newSearchParams = new URLSearchParams(searchParams.toString());
  if (page) {
    newSearchParams.delete("page");
  }
  if (size) {
    newSearchParams.delete("size");
  }
  return newSearchParams;
}
