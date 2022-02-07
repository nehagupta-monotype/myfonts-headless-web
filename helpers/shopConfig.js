
export function initAmountFormatter (country, currency) {
  window.currencyFormatter = new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currency
  });
}

export function formatAmount (amount, country) {
  if (window.currencyFormatter) {
    let formattedAmount = window.currencyFormatter.format(amount);
    if (country) {
      return formattedAmount.replace(country, "");
    }
    return formattedAmount;
  }
}

