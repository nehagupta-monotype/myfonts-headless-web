/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/jsx-no-comment-textnodes */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Constants from '../config/constants';
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

          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${Constants.global.gtmId}');`}}></script>
        </Head>
        <body>
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${Constants.global.gtmId}`}
          height="0" width="0" style={{display:"none", visibility:"hidden"}}></iframe></noscript>
          <Main />
          <NextScript />
          {/* This is temporary hack for bypassing the password issue on storefront */}
          <script dangerouslySetInnerHTML={{
            __html: `window.document.cookie = "storefront_digest=1cc29d806ec6a9251ad5087a3db568bee14854fdcddd84751f8867d32b5284e5";`
          }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
