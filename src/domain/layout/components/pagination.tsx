import {SegmentMetaData} from "../../../api/layout/type";
import Link from "next/link";
import {useRouter} from "next/router";

export function getPagesAmount(limit:number, total:number): number {
    return Math.ceil(total / limit)
}
export function getCurrentPage(list:SegmentMetaData): number {
    const { limit, offset, total } = list
    if (offset <= 0 || offset < limit) {
        return 1
    }

    if (offset > total) {
        const lastPage = getPagesAmount(limit, total)
        return lastPage
    }

    let page = offset / limit

    if (Math.ceil(page) === page) {
        page += 1
    }

    page = Math.ceil(page)

    return page
}
export default function Pagination( {metadata}: {metadata: SegmentMetaData} ) {
    const router = useRouter()
    const path = [router.query.category ?? []].flat()
    const currentPage = getCurrentPage(metadata)
    const nextPage = currentPage < getPagesAmount(metadata.limit, metadata.total) ? currentPage + 1 : null

    return (
        <>
            <h1>{ currentPage } </h1>
            { nextPage &&
            <Link href={{
                pathname: path.join('/'),
                query: {page: nextPage},
            }}>
                <a> Next Page</a>
            </Link> }
        </>
    )
}