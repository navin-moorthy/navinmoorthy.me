import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { InitializeColorMode } from "@chakra-ui/color-mode"
import GoogleFonts from "next-google-fonts"

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <title>Navin Moorthy</title>
          <meta name="title" content="Navin Moorthy" />
          <meta name="description" content="Portfolio blog of Navin Moorthy" />

          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#EA2E6E" />
          <meta name="theme-color" content="#EA2E6E" />

          <title>Navin Moorthy</title>
          <meta name="title" content="Navin Moorthy" />
          <meta name="description" content="Portfolio blog of Navin Moorthy" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://navinmoorthy.me/" />
          <meta property="og:title" content="Navin Moorthy" />
          <meta
            property="og:description"
            content="Portfolio blog of Navin Moorthy"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/navin-moorthy/image/upload/v1594553796/navin-moorthy/og-image.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://navinmoorthy.me/" />
          <meta property="twitter:title" content="Navin Moorthy" />
          <meta
            property="twitter:description"
            content="Portfolio blog of Navin Moorthy"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/navin-moorthy/image/upload/v1594553796/navin-moorthy/og-image.png"
          ></meta>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
