
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Header({ data }) {
  const { staticContent, searchClient } = useContext(AppContext);
  // console.log(staticContent);
  // console.log(searchClient);
  return (
    <header>
      {staticContent && staticContent.title}
    </header>
  )
}
