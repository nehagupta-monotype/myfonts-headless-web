initShopData = (data) => {
  shopData = data
}

initAmountFormatter = (country, currency) => {
  currencyFormatter = new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currency
  });
}

formatAmount = (amount, country) => {
  if (currencyFormatter) {
    let code = country ? country : shopData?.paymentSettings?.countryCode;
    let formattedAmount = currencyFormatter.format(amount);
    return formattedAmount.replace(code, "");
  }
}

// DataController = {
// 	defaults: {
// 		'eventCat': 'ecommerce',
// 		'eventVal': 0,
// 		'ecommerce': {
// 			'currencyCode': window.shopData?.paymentSettings?.currencyCode,
// 		}
// 	},
// 	push(eventData) {
// 		try {
// 			// find the dataLayer or create it
// 			window.dataLayer = window.dataLayer || [];
// 			// merge passed in data with defaults and push it to the dataLayer
// 			window.dataLayer.push($.extend(true, {}, this.defaults, eventData));
// 		} catch (err) {
// 			console.error('Failed push to dataLayer', err);
// 		}
// 	}
// };
