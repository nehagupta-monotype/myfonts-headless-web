import { withSessionRoute } from "../../lib/withSession";
import axios from "axios";

async function logout(req, res) {
  const auth0Logout = await axios.get(
    `${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}`
  );
  let host = req.headers.host;
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'
  const shopifyLogout = await axios.get(`${protocol}//${host}/account/logout`);
  req.session.destroy();
  res.redirect("/");
}

export default withSessionRoute(logout);
