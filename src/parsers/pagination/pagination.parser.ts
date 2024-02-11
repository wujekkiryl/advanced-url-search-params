import { Pagination } from "../../types/pagination";

export function parsePagination(searchParams: URLSearchParams): Pagination {
  const page = searchParams.get("page");
  const size = searchParams.get("size");
  if (page && isNaN(+page)) {
    throw new Error(`Invalid pagination page value ${page}`);
  }
  if (size && isNaN(+size)) {
    throw new Error(`Invalid pagination size value ${size}`);
  }
  return {
    page: page ? +page : undefined,
    size: size ? +size : undefined,
  };
}
