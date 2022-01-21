import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="//cdn.shopify.com/s/files/1/0591/3352/6223/t/12/assets/fonts.css?v=14768300496281454183" rel="stylesheet" type="text/css" media="all" />
          <link href="//cdn.shopify.com/s/files/1/0591/3352/6223/t/12/assets/base.css?v=10298775244115028189" rel="stylesheet" type="text/css" media="all" />
          <link href="//cdn.shopify.com/s/files/1/0591/3352/6223/t/12/assets/layout.css?v=13697210778542036220" rel="stylesheet" type="text/css" media="all" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
