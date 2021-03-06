import Provider from "./provider";
import Constants from "../config/constants";

const baseUrl = process.env.CMS_BASE_URL + "/jsonapi/node";

const contentService = {};

contentService.getHeader = async () => {
  const url = baseUrl + Constants.content.headerApi;
  try {
    const res = await Provider.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

contentService.getFooter = async () => {
  const url = baseUrl + Constants.content.footerApi;
  try {
    const res = await Provider.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export default contentService;
