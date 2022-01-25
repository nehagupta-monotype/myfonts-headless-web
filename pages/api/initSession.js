import { withSessionRoute } from "../../lib/withSession";

import axios from "axios";

async function initSession(req, res) {
  if (req.query.code) {
    const loginData = await axios.post(
      `${process.env.AUTH0_REDIRECT_URI}/api/providelogindata`,
      {
        code: req.query.code,
        final_uri: req.headers.host
      },
      {headers: {"x-api-key": process.env.SESSION_X_API_KEY}}
    );
    let userData = loginData.data.userData;
    // console.log(userData.access_token)
    if (userData.access_token && userData.id_token && loginData.data.multipassUrl) {
      req.session.userData = userData;
      await req.session.save();
      res.redirect(loginData.data.multipassUrl);
    } else {
      res.status(404).json("Not found")
    }
  } else {
    res.status(404).json("Not found")
  }
}

export default withSessionRoute(initSession);
