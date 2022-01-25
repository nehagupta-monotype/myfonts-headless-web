
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Login({ data }) {
  const { staticContent, user } = useContext(AppContext);
  return (
    <div>
      {user && user.data &&
        <div>Welcome user</div>
      }
      {!user &&
        <a href="/api/initLogin">Login / Signup</a>
      }
    </div>
  )
}
