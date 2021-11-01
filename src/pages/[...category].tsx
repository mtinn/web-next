import { useRouter } from 'next/router'
import {string} from "prop-types";

const CategoryPage = () => {
    const router = useRouter()
    const slug = router.query.category || []
    const slug2 = (typeof slug === `string`) ? [slug] : slug;
    return <>
        <h1>Categories</h1>
        <h2>Slug: {slug2.join('/')}</h2>
    </>
}

export default CategoryPage