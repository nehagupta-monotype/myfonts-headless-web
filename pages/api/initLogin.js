import { withSessionRoute } from "../../lib/session/withSession";

async function initLogin(req, res) {
  const session = req.session;
  if (session.userData && session.userData.id_token) {
    res.redirect('/', 302);
    return;
  }
  const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_REDIRECT_URI, AUTH0_AUDIENCE } = process.env;
  // Make the login URL
  const loginUrl = `${AUTH0_DOMAIN}/authorize?response_type=code&client_id=${AUTH0_CLIENT_ID}&state=STATE&redirect_uri=${AUTH0_REDIRECT_URI}/api/handleheadlesslogin?final_uri=${req.headers.referer}&audience=${AUTH0_AUDIENCE}/&scope=openid%20profile%20email&ui_locales=en`;
  res.redirect(loginUrl, 302);
  return;
}

export default withSessionRoute(initLogin);
