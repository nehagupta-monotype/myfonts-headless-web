import { withSessionRoute } from "../../lib/withSession";

async function getSession(req, res) {
  let data = req.session.userData
  if (data && data.id_token) {
    res.status(200).json(JSON.parse(data.id_token));
  } else {
    res.status(200).json(null);
  }
}

export default withSessionRoute(getSession);
