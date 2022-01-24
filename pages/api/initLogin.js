import { getSession } from "../../lib/getSession";

export default async function handler(req, res) {
  const session = await getSession(req, res);

  if (session.user && session.user.data) {
    res.redirect('/');
    return;
  }
  const { AUTH0_DOMAIN, AUTH0_CLIENT, AUTH0_REDIRECT_URI, AUTH0_AUDIENCE } = process.env;
  // Make the login URL
  const loginUrl = `${AUTH0_DOMAIN}/authorize?response_type=code&client_id=${AUTH0_CLIENT}&state=STATE&redirect_uri=${AUTH0_REDIRECT_URI}/api/handlelogin?final_uri=${req.headers.referer}&audience=${AUTH0_AUDIENCE}/&scope=openid%20profile%20email&ui_locales=en`;
  console.log(loginUrl);
  res.redirect(loginUrl);
  return;
}
