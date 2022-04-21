import { useRouter } from "next/router";

import Head from "next/head";

//theme
import { Layout } from "../layout/Layout";
import globalStyles from "../styles/globals";

//props
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale, locales, asPath } = useRouter();
  globalStyles();

  return (
    <>
      <Head>
        
        <title>Nathan Hallouin</title>
      </Head>

      <Layout locale={locale}>
        <Component locale={locale} {...pageProps} />
      </Layout>
    </>
  );
}