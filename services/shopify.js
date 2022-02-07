import Provider from "./providers/restProvider";

const shopifyServices = {};

shopifyServices.getShopData = async () => {
  const url = process.env.NEXT_PUBLIC_SHOPIFY_GRAPH_DOMAIN;
  try {
    const res = await Provider.post(
      url,
      GET_SHOP_CONFIG,
      {"X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_GRAPH_API_KEY}
    );
    return res.data;
  } catch (err) {
    console.log("in failure", err)
    return null;
  }
};

const GET_SHOP_CONFIG = {
  query: `query {
    shop {
      name
      moneyFormat
      paymentSettings {
          currencyCode
          countryCode
      }
      primaryDomain {
          host
          url
      }
    }
  }`,
};

export default shopifyServices;
