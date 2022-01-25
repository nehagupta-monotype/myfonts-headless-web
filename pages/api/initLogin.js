// import { getSession } from "../../lib/getSession";
import { withSessionRoute, getSession } from "../../lib/withSession";

async function initLogin(req, res) {
    // const session = await getSession(req, res);
    const session = req.session;

  if (session.user && session.user.data) {
    res.redirect('/');
    return;
  }
  const { AUTH0_DOMAIN, AUTH0_CLIENT, AUTH0_REDIRECT_URI, AUTH0_AUDIENCE } = process.env;
  // Make the login URL
  const loginUrl = `${AUTH0_DOMAIN}/authorize?response_type=code&client_id=${AUTH0_CLIENT}&state=STATE&redirect_uri=${AUTH0_REDIRECT_URI}/api/handleheadlesslogin?final_uri=${req.headers.referer}&audience=${AUTH0_AUDIENCE}/&scope=openid%20profile%20email&ui_locales=en`;
  res.redirect(loginUrl);
  return;
}

export default withSessionRoute(initLogin);
