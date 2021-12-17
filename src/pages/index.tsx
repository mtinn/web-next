import Head from "next/head";
import styles from "../styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import ListItem from "../domain/category/components/list";
import { flattenCategories } from "../domain/category/categories";
import { getCategoriesAll } from "../api/category/data";

export const getStaticProps = async () => {
  const categories = await getCategoriesAll();
  return {
    props: {
      categories: flattenCategories(categories),
    },
  };
};

function Home({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1>Categories</h1>
        <ListItem categories={categories} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Home;
