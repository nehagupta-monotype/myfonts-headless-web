
import { useContext } from "react";
import AppContext from "../../context/appContext";

export default function Footer({ data }) {
  const value = useContext(AppContext);
  return (
    <footer>
      {/* {value.title} */}
      This is page footer
    </footer>
  )
}
