import '../styles/globals.css';
import App, { Container } from 'next/app';
import AppContext from "../context/appContext";
import contentService from '../services/content';
import searchClient from '../helpers/searchClient';
import { getSession } from "../lib/withSession";
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../services/providers/graphProvider'

function MyfontsApp({ Component, pageProps, staticContent, userData }) {
  const apolloClient = useApollo(pageProps)
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <AppContext.Provider value={{
      searchClient: searchClient,
      staticContent: staticContent,
      userData: userData
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
  const content = await contentService.getHeader(); // Get content from CMS
  const session = await getSession(appContext.ctx.req, appContext.ctx.res);
  console.log("In APP JS", session);

  if (session.userData === undefined) {
    session.userData = {};
  }
  return {
    ...appProps,
    staticContent: content?.attributes ?? null,
    userData: session.userData
  };
};

export default MyfontsApp;
