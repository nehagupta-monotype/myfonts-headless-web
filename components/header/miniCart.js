import { gql, useQuery } from '@apollo/client';
import { useContext, useState, useEffect } from "react";

import {GET_MINI_CART} from '../../services/graphql/cart'

export default function MiniCart() {
  const { loading, error, data } = useQuery(GET_MINI_CART);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data && data.cart &&
        <div>Cart amount is {data.cart.estimatedCost.totalAmount.amount}</div>
      }
    </>
  );
}
