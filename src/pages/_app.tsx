import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>errors.racc.lol</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="trapsarent.gay" />
        <meta property="og:image" content="/logo.ico" />
        <meta property="twitter:image" content="" />
        <meta property="og:url" content="https://trapsarent.gay/" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="trapsarent.gay" />

        <meta
          name="description"
          content="The goose and coon have joined forces"
        />
        <meta property="og:title" content="trapsarent.gay" />
        <meta
          property="og:description"
          content="The goose and coon have joined forces"
        />
        <meta property="twitter:title" content="trapsarent.gay" />
        <meta
          property="twitter:description"
          content="The goose and coon have joined forces"
        />
      </Head>
      <div className="flex flex-col text-white ">
        <Component {...pageProps} />
      </div>
    </>
  );
}
