import Head from "next/head";
import React from "react";
import HeaderView from "../domain/header/components/view";
export const siteTitle = "Lets Deal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <HeaderView />
      <main>{children}</main>
    </>
  );
}
