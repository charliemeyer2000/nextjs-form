import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>MoniFlow Form</title>
        <link rel="icon" href="/moniflow.png" />
        {/* open graph */}
        <meta property="og:title" content="MoniFlow Form" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/moniflow.png" />
        <meta property="og:description" content="MoniFlow Form" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
