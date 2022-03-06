import { NextPage } from "next";
import { useRouter } from "next/router";
import { Home } from "../features/Home";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>Eldenring-B</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Eldenring-B" />
        <meta
          property="og:description"
          content="永遠の女王マリカを戴く狭間の地で黄金樹の根源たる、エルデンリングが砕けた"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://eldenring-b.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/sbleru/s-no/main/apps/eldenring-b/src/assets/eycatch.png"
        />
        <meta name="twitter:site" content="@SBleru" />
        {/* Twitterだとこれないと大きい画像にならないっぽい */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:title" content="Eldenring-B" /> */}
        {/* <meta name="twitter:image" content="https://storage.googleapis.com/bleruhack.appspot.com/eycatch.png" /> */}
        {/* <meta name="twitter:description" content="永遠の女王マリカを戴く狭間の地で黄金樹の根源たる、エルデンリングが砕けた" /> */}
      </Head>
      <Home />
    </>
  );
}
