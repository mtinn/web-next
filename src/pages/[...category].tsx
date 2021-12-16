import {CategoriesContainer} from "../domain/category/containers/category"
import {flattenCategories} from "../domain/category/categories"
import {GetServerSideProps, GetStaticPropsContext, InferGetStaticPropsType} from "next"
import CategoryView from "../domain/category/components/view"
import {getCategoriesAll} from "../api/category/data"
import {getLayout} from "../api/layout/data"


export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps = async (context: GetStaticPropsContext) => {
    const categories = await getCategoriesAll()

    const categorySlug = context.params?.category
    const slug = typeof categorySlug === "string" ? categorySlug : categorySlug?.join('/')
    const category = flattenCategories(categories).find(x => x.absoluteSlug === slug)

    if (undefined === category) {
        return {
            notFound: true
        };
    }


    const layout = await getLayout(category.id)

    return {
        props: {
            categories: flattenCategories(categories),
            layout: layout,
            category: category
        },
        revalidate: 60,
    }
}
const CategoryPage = ({categories, layout, category} : InferGetStaticPropsType<typeof getStaticProps>) => {

    return <CategoriesContainer categories={categories}>
        <CategoryView layout={layout} category={category}></CategoryView>
    </CategoriesContainer>
}

export default CategoryPage