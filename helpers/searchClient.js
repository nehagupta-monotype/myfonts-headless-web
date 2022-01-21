import algoliasearch from "algoliasearch/lite";

const searchServiceClient = {
  search(requests) {
    return fetch('http://localhost:4000/search', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requests }),
    }).then(res => res.json());
  }
};

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_API_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY,
);

const searchClient = algoliaClient;

export default searchClient;
