import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Category} from "../domain/category/types";
import {InferGetStaticPropsType} from "next";
import ListItem from "../domain/category/components/list";
import {flattenCategories} from "../domain/category/categories";

export const getStaticProps = async () => {
    const res = await fetch(process.env.API_URI + 'categories')
        .then((res) => res.json());
    const categories:Category[] = res['items'];
    return {
        props: {
            categories: flattenCategories(categories)
        },
    }
}

function Home({ categories }: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
          <h1>Categories</h1>
          <ListItem categories={categories} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
