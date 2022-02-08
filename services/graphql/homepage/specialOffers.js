import { gql, useMutation } from '@apollo/client'

// For creating metafields please invoke admin query with
// https://shopify.dev/custom-storefronts/products/metafields

// var axios = require('axios');
// var data = JSON.stringify({
//   query: `mutation($input: MetafieldStorefrontVisibilityInput!) {
//   metafieldStorefrontVisibilityCreate(
//     input: $input
//   ) {
//     metafieldStorefrontVisibility {
//       id
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }`,
//   variables: {"input":{"namespace":"customer","key":"albums","ownerType":"CUSTOMER"}}
// });

// var config = {
//   method: 'post',
//   url: 'https://preprod-myfonts.myshopify.com/admin/api/2022-01/graphql.json',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Shopify-Access-Token': '',
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


export const GET_SPECIAL_OFFERS = gql`
{
  collectionByHandle(handle: "special-offers") {
    handle
    mFamilyImages: metafield(namespace: "family", key: "images") {
      value
      type
    }
    products(first: 250) {
      edges {
        node {
          handle
          onlineStoreUrl
          tags
          title
          mGlobalFamily: metafield(namespace: "global", key: "family") {
            value
            type
          }
          mGlobalFoundry: metafield(namespace: "global", key: "foundry") {
            value
            type
          }
        }
      }
    }
  }
}
`;
