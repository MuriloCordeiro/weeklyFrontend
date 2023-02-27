import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Exo:wght@300;700&display=swap"
            rel="preload"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,700&family=Exo:wght@300;700&display=swap"
            media="print"
            onLoad={(e) => (e.currentTarget.media = "all")}
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
