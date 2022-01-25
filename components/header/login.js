
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Login({ data }) {
  const { staticContent, userData } = useContext(AppContext);
  let user;
  if (userData && userData.id_token) {
    user = JSON.parse(userData.id_token);
  }
  // console.log("User data", user)
  return (
    <div>
      {user &&
        <div>Welcome, {user.name} | <a href="/api/logout">Logout</a></div>
      }
      {!user &&
        <a href="/api/initLogin">Login / Signup</a>
      }
    </div>
  )
}
