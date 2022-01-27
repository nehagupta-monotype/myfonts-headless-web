import { gql, useQuery } from '@apollo/client';
import {GET_MINI_CART} from '../../services/graphql/cart'

export default function ExchangeRates() {
  const { loading, error, data } = useQuery(GET_MINI_CART);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
