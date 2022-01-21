import Image from "next/image";
import {
  InstantSearch,
  Hits,
  Configure,
} from 'react-instantsearch-dom';
import { useContext } from "react";
import constants from "../../config/constants";
import AppContext from "../../context/appContext";

const StaffPicks = () => {
  const { searchClient } = useContext(AppContext);
  // console.log(searchClient)
  return (
    <InstantSearch searchClient={searchClient} indexName={constants.search.indexes.homeStaffPicks}>
      <Configure facetFilters={['type:Family']} clickAnalytics={true} />
      <div className="homepage__bottomBlock__staffPicksWrapper">
        <div className="homepage__bottomBlock__contentWrapper -solidBox -borderBox">
          <div className="staffPicks">
            {/* <h3 className="staffPicks__title mf-ribbon">{staffPicksContainer.dataset.title}</h3> */}
            <h3 className="staffPicks__title mf-ribbon">Staff Picks</h3>
            <Hits hitComponent={Hit} />
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}

function Hit(props) {
  // var min_price = jsCurrency.format(props.hit.min_price * conversionRate);
  // if (window.changeLimiters) {
  //     min_price = window.changeLimiters(min_price, window.Shopify.currency.active);
  // }
  var min_price = "$20.00";
  return (
    <div className="staffPicks__fontContainer">
      <a className="staffPicks__fontContainer__link" href={props.hit.url}>
        <Image
          className="staffPicks__fontContainer__sampleImage"
          src={'https://render.myfonts.net/fonts/font_rend.php?id=' + props.hit.default_variation_MD5 + '&rs=26&bg=ffffff&amp;fg=000000&rt=' + props.hit.name + ' AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789&sc=2&t=o&w=1024'}
          alt={props.hit.name}
          title={props.hit.name}
          height='35'
          width='480'
          loading="lazy" />
      </a>
      <div className="staffPicks__fontContainer__fontDetails">
        <span className="staffPicks__fontContainer__fontDetails__name">
          <a href={props.hit.url}>{props.hit.name}</a> by <a href={props.hit.foundry_url}>{props.hit.foundry_name}</a>
        </span>
        <span className="staffPicks__fontContainer__fontDetails__priceInfo">
          <span>{props.hit.font_count} fonts starting at <span className="staffPicks__fontContainer__fontDetails__price">{min_price}</span></span>
        </span>
      </div>
    </div>
  );
}

export default StaffPicks;
