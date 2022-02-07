import '../styles/globals.css';
import App, { Container } from 'next/app';
import AppContext from "../context/appContext";
import contentServices from '../services/content';
import shopifyServices from '../services/shopify';
import searchClient from '../helpers/searchClient';
import { getSession } from "../lib/session/withSession";
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../services/providers/graphProvider'

function MyfontsApp({ Component, pageProps, staticContent, userData, shopifyData }) {
  const apolloClient = useApollo(pageProps)
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <AppContext.Provider value={{
      searchClient: searchClient,
      staticContent: staticContent,
      userData: userData,
      shopifyData: shopifyData
    }}>
      <ApolloProvider client={apolloClient}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </AppContext.Provider>
  )
}


MyfontsApp.getInitialProps = async (appContext) => {
  // appContext is differnt than context in page. It provides
  // -- AppTree
  // -- Component
  // -- router
  // -- ctx --> err, req, res,
  const appProps = await App.getInitialProps(appContext); // Retrieves page's `getInitialProps`
  const content = await contentServices.getHeader(); // Get content from CMS
  const shopifyData = await shopifyServices.getShopData();
  const session = await getSession(appContext.ctx.req, appContext.ctx.res);

  if (session.userData === undefined) {
    session.userData = {};
  }
  return {
    ...appProps,
    staticContent: content?.attributes ?? null,
    userData: session.userData.id_token,
    shopifyData: shopifyData
  };
};

export default MyfontsApp;
