
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Login({ data }) {
  const { staticContent, user } = useContext(AppContext);
  console.log(user);
  return (
    <div>
      {user.data &&
        <div>Welcome user</div>
      }
      {!user.data &&
        <a href="/api/initLogin">Login / Signup</a>
      }
    </div>
  )
}
