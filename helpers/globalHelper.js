initShopData = (data) => {
  shopData = data;
  DataController = {
    defaults: {
      'eventCat': 'ecommerce',
      'eventVal': 0,
      'ecommerce': {
        'currencyCode': shopData?.paymentSettings?.currencyCode,
      }
    },
    push(eventData) {
      try {
        // find the dataLayer or create it
        dataLayer = dataLayer || [];
        // merge passed in data with defaults and push it to the dataLayer
        dataLayer.push(Object.assign(this.defaults, eventData));
      } catch (err) {
        console.error('Failed push to dataLayer', err);
      }
    }
  };
  // Temporary hack to avoid GTM errors in popup.
  noOverlayWorkaroundScript = `
    window.addEventListener('error', event => {
      event.stopImmediatePropagation()
    })

    window.addEventListener('unhandledrejection', event => {
      event.stopImmediatePropagation()
    })
  `;

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

