/**
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://raw.githubusercontent.com/sbleru/s-no/main/apps/eldenring-b/src/assets/eycatch.png"
          />
          <link
            rel="apple-touch-icon"
            href="https://raw.githubusercontent.com/sbleru/s-no/main/apps/eldenring-b/src/assets/eycatch.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
