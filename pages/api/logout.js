import { withSessionRoute } from "../../lib/withSession";
import axios from "axios";

async function logout(req, res) {
  let host = req.headers.host;
  let protocol = /^localhost(:\d+)?$/.test(host) ? 'http:' : 'https:'

  req.session.destroy();
  res.redirect(`${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${protocol}//${host}/account/logout`, 302);
}

export default withSessionRoute(logout);
