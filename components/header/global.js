
import { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import Login from "./login";
import MiniCart from './miniCart';
import { initAmountFormatter, formatAmount } from '../../helpers/shopConfig'

export default function Header({ data }) {
  const { staticContent, searchClient, shopData } = useContext(AppContext);

  useEffect(() => {
    if (shopData?.paymentSettings) {
      initAmountFormatter(shopData.paymentSettings.countryCode, shopData.paymentSettings.currencyCode);
      console.log(formatAmount (45, shopData.paymentSettings.countryCode))
    }
  }, [shopData])

  return (
    <header>
      {staticContent && staticContent.title}
      <Login/>
      <MiniCart />
    </header>
  )
}
