import { useContext, useState, useEffect } from "react";
import { connectVoiceSearch } from "react-instantsearch-core";

import { GET_SPECIAL_OFFERS } from '../../services/graphql/homepage/specialOffers';
import { useGPQuery } from "../../services/providers/graphProvider";

const SpecialOffers = () => {
  const { loading, error, data } = useGPQuery(GET_SPECIAL_OFFERS);
  return (
    <>
      {data?.collectionByHandle?.products?.edges && data.collectionByHandle.products.edges.length > 0 &&
        <div className="homepage__specialOffersWrapper">
          <div className="container">
            <div className="specialOffers">
              <div className="specialOffers__header">
                <a className="mf-ribbon-link" href="/collections/special-offers">
                  <h3 className="mf-ribbon specialribbon">Special Offers!</h3>
                </a>
                <div className="specialOffers__headerTextContainer">
                  <span className="specialOffers__headerDescription">
                    These great deals are expiring soon, act now to save on these awesome fonts.
                  </span>
                  <a href="/collections/special-offers" className="specialOffers__headerViewAll">view all font deals &gt;</a>
                </div>
              </div>
              <div className="specialOffers__content" id="offerdata">
                {data.collectionByHandle.products.edges.map((product, index) => {

                  if (product.node.tags && product.node.tags.length > 0) {
                    let discountTag = product.node.tags.filter(e => e.includes("discount_"))[0];
                    if (discountTag) {
                      return (<div key={index}><CarousalCard discountTag={discountTag} productData={product.node}/></div>)
                    }
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

function checkOfferEndDate () {
  // {% assign curDate="now" | date: "%s" %}
  // {% assign datediff = EndDate | date: "%s" | minus: curDate | divided_by: 3600 | divided_by: 24 | round %}
  // var offerText;
  // {%- if datediff < 0 -%}
  //   offerText = "Offer Ended";
  // {%- elsif datediff == 1 -%}
  //   offerText = "Ends Tomorrow {{ EndDate | date: ' %l:%M %p' }}";
  // {%- elsif datediff > 2 -%}
  //   {% assign offerText = EndDate | date: '%B %e' %}
  //   {% assign offerText1 = EndDate | date: ' at %l:%M %p' %}
  //   offerText = "Ends {{ offerText | append: offerText1 }}";
  // {%- endif -%}

}
function CarousalCard({discountTag, productData}) {
  let discountData = discountTag.split("_");
  let percentage = discountData[5].replaceAll("-", " ");
  let type = discountData[1].replaceAll("-", " ");
  let foundryType = discountData[2].replaceAll("-", " ");
  let startDate = discountData[3];
  let endDate = discountData[4];
  let createdDate = discountData[6];


  let familyUrl = productData?.mGlobalFamily?.value ? JSON.parse(productData.mGlobalFamily.value).url : "/";

  // console.log("discountData", discountData);
  // console.log("percentage", percentage);
  // console.log("type", type);
  // console.log("foundryType", foundryType);
  // console.log("startDate", startDate);
  // console.log("endDate", endDate);
  // console.log("createdDate", createdDate);
  // console.log("\n\n");

  // htmltext += "<<a class='specialOffers__contentLink' href='"+item.family_url+"'><img src='"+item.spimage+"' alt='Special offer on "+item.product_title+"' loading='lazy' width='219' height='110'><p class='saletext'>"+item.discount_type+" | "+item.discountper+" % Off</p></a></div>";

  return (
    <div className="specialOffers__contentCard">
      <a className="specialOffers__contentLink" href={familyUrl}>
        <img src="https://cdn.myfonts.net/cdn-cgi/image/width=720,height=360,fit=contain,format=auto/images/pim/10000/310437_dcd19c45c32e0c45db83d3fa9f242533.png" alt="Special offer on " {...productData.title} loading="lazy" width="219" height="110" />
        <p className="saletext">{type} | {percentage} % Off</p>
      </a>
    </div>
  )
}

export default SpecialOffers;
