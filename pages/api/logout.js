import { withSessionRoute } from "../../lib/withSession";
import axios from "axios";

async function logout(req, res) {
  const logoutResp = await axios.get(
    `${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT}`
  );
  req.session.destroy();
  res.redirect("/");
}

export default withSessionRoute(logout);
