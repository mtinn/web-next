import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {flattenCategories} from "../domain/category/categories"
import {CategoriesContainer} from "../domain/category/containers/category"
import {getCategoriesAll} from "../api/category/data"
import Layout from '../layouts/Layout';

export const getStaticProps = async () => {
  const categories = await getCategoriesAll()

  return {
    props: {
      categories: flattenCategories(categories)
    }
  }
}
function MyApp({ Component, pageProps }: AppProps) {

  return <CategoriesContainer categories={pageProps.categories}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CategoriesContainer>
}
export default MyApp
