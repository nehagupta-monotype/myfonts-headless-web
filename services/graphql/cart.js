import { gql, useMutation } from '@apollo/client'
import { defaultFieldResolver } from 'graphql';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export default EXCHANGE_RATES;

