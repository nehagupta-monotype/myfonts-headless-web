
import { useContext } from "react";
import AppContext from "../../context/appContext";
import Login from "./login";

export default function Header({ data }) {
  const { staticContent, searchClient } = useContext(AppContext);
  // console.log(staticContent);
  // console.log(searchClient);
  return (
    <header>
      {staticContent && staticContent.title}
      <Login/>
    </header>
  )
}
