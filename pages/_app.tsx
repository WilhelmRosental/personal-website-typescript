import { useRouter } from "next/router"

import Head from "next/head"

//theme
import { Layout } from "../layout/Layout"
import { Global } from '@emotion/react'
import { globalStyles } from "../styles/global"

//props
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <title>Nathan Hallouin</title>
      </Head>

      <Layout locale={locale}>
        <Component locale={locale} {...pageProps} />
      </Layout>
    </>
  );
}
