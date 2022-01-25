
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Login({ data }) {
  const { staticContent, userData } = useContext(AppContext);
  console.log("in header", userData)
  return (
    <div>
      {userData && userData.access_token && userData.id_token &&
        <div>Welcome user {userData.id_token}</div>
      }
      {!(userData && userData.access_token) &&
        <a href="/api/initLogin">Login / Signup</a>
      }
    </div>
  )
}
