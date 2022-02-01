
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import Provider from "../../services/providers/restProvider";
import Constants from "../../config/constants";
import Link from 'next/link'

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
        <div>Welcome, {user.name} | <Link href="/api/logout">Logout</Link></div>
      }
      {!user &&
        <Link href="/api/initLogin">Login / Signup</Link>
      }
    </div>
  )
}
