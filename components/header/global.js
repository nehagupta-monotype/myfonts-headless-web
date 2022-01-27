
import { useContext } from "react";
import AppContext from "../../context/appContext";
import Login from "./login";
import MiniCart from './miniCart'

export default function Header({ data }) {
  const { staticContent, searchClient } = useContext(AppContext);
  // console.log(staticContent);
  return (
    <header>
      {staticContent && staticContent.title}
      <Login/>
      {/* <MiniCart /> */}
    </header>
  )
}
