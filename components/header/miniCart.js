import { gql, useQuery } from '@apollo/client';
import { useContext, useState, useEffect } from "react";

import {GET_MINI_CART, GET_CHECKOUT} from '../../services/graphql/cart'

export default function MiniCart() {
  const { loading, error, data } = useQuery(GET_MINI_CART);
  const data1 = useQuery(GET_CHECKOUT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data && data.cart &&
        <div>Cart amount is {formatAmount(data.cart.estimatedCost.totalAmount.amount)}</div>
      }
      {data1.data && data1.data.node &&
        <div>Checkout amount is {formatAmount(data1.data.node.totalPriceV2.amount)}</div>
      }
    </>
  );
}
