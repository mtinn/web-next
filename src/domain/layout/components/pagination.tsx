import { SegmentMetaData } from "../../../api/layout/type";
import Link from "next/link";
import { useRouter } from "next/router";

export const DOTS = "...";

export function getPagesAmount(limit: number, total: number): number {
  return Math.ceil(total / limit);
}
export function getCurrentPage(list: SegmentMetaData): number {
  const { limit, offset, total } = list;
  if (offset <= 0 || offset < limit) {
    return 1;
  }

  if (offset > total) {
    return getPagesAmount(limit, total);
  }

  let page = offset / limit;

  if (Math.ceil(page) === page) {
    page += 1;
  }

  page = Math.ceil(page);

  return page;
}
export function getPopulatedArray(
  from: number,
  to: number,
  step: number = 1
): number[] {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}
export function preparePaginationModel(
  totalPageCount: number,
  currentPage: number,
  pageNeighbours: number
): number[] {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPageCount > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPageCount - 1, currentPage + pageNeighbours);

    let pages = getPopulatedArray(startPage, endPage);
    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPageCount - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);

    if (hasLeftSpill && !hasRightSpill) {
      const extraPages = getPopulatedArray(
        startPage - spillOffset,
        startPage - 1
      );
      pages = [0, ...extraPages, ...pages];
    }

    if (!hasLeftSpill && hasRightSpill) {
      const extraPages = getPopulatedArray(endPage + 1, endPage + spillOffset);
      pages = [...pages, ...extraPages, 0];
    }

    if (hasLeftSpill && hasRightSpill) {
      pages = [0, ...pages, 0];
    }

    return [1, ...pages, totalPageCount];
  }
  return getPopulatedArray(1, totalPageCount);
}
export default function Pagination({
  metadata,
}: {
  metadata: SegmentMetaData;
}) {
  const router = useRouter();
  const path = [router.query.category ?? []].flat();
  const currentPage = getCurrentPage(metadata);
  const nextPage =
    currentPage < getPagesAmount(metadata.limit, metadata.total)
      ? currentPage + 1
      : null;
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const pages = preparePaginationModel(metadata.total, currentPage, 3);
  return (
    <>
      <nav>
        <ul>
          {previousPage && (
            <li key={"previous"}>
              <Link
                href={{
                  pathname: path.join("/"),
                  query: { page: previousPage },
                }}
              >
                <a>Previous Page</a>
              </Link>
            </li>
          )}
          {pages.map((page) => {
            const isActive = page === currentPage;
            if (page === 0) {
              return (
                <li key={"dots"}>
                  <span> {DOTS}</span>
                </li>
              );
            }
            if (isActive) {
              return (
                <li key={page}>
                  <b>{page}</b>
                </li>
              );
            }
            return (
              <li key={page}>
                <Link
                  key={page}
                  href={{
                    pathname: path.join("/"),
                    query: { page: page },
                  }}
                >
                  <a> {page}</a>
                </Link>
              </li>
            );
          })}
          {nextPage && (
            <li key={"next"}>
              <Link
                href={{
                  pathname: path.join("/"),
                  query: { page: nextPage },
                }}
              >
                <a> Next Page</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
