
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import Provider from "../../services/providers/restProvider";
import Constants from "../../config/constants";

export default function Login({ data }) {
  const { staticContent, userData } = useContext(AppContext);
  const [user, setUser] = useState(userData ? JSON.parse(userData) : null);

  useEffect(() => {
    if (!user) {
      Provider.get(Constants.services.getSession)
      .then(function (response) {
        response && setUser(response);
      })
     .catch(function (error) {
        console.log(error);
     });
    }
  }, [user])

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
