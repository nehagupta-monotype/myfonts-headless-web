import { gql, useMutation } from '@apollo/client'

export const GET_MINI_CART = gql`
{
  cart(id: "gid://shopify/Cart/d54fba337a0f7d0c8e9aaee7b2dc9899") {
    id
    createdAt
    updatedAt
    lines(first:10) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
            }
          }
          attributes {
            key
            value
          }
        }
      }
    }
    attributes {
      key
      value
    }
    estimatedCost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
      totalDutyAmount {
        amount
        currencyCode
      }
    }
    buyerIdentity {
      email
      phone
      customer {
        id
      }
      countryCode
    }
  }
}
`;

export const CREATE_CART = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        lines(first:10) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }

        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

export const CREATE_CHECKOUT = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        createdAt
        updatedAt
        webUrl
        email
        currencyCode
        lineItemsSubtotalPrice {
          amount
          currencyCode
        }
        paymentDueV2 {
          amount
          currencyCode
        }
        subtotalPriceV2 {
          amount
          currencyCode
        }
        taxExempt
        taxesIncluded
        totalDuties {
          amount
          currencyCode
        }
        totalPriceV2 {
          amount
          currencyCode
        }
        totalTaxV2 {
          amount
          currencyCode
        }
        lineItems(first:10) {
          edges {
            node {
              id
              quantity
              title
              unitPrice {
                amount
                currencyCode
              }
              variant {
                ... on ProductVariant {
                  id
                }
              }
            }
          }

        }
        customAttributes {
          key
          value
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const GET_CHECKOUT = gql`
{
  node (id: "gid://shopify/Checkout/32ed1b8cd7915ada399da7c9e3ef5340?key=11e63bca20a3143ea9f1b743ca0756c6") {
    ... on Checkout {
      id
      createdAt
      updatedAt
      webUrl
      email
      currencyCode
      lineItemsSubtotalPrice {
        amount
        currencyCode
      }
      paymentDueV2 {
        amount
        currencyCode
      }
      subtotalPriceV2 {
        amount
        currencyCode
      }
      taxExempt
      taxesIncluded
      totalDuties {
        amount
        currencyCode
      }
      totalPriceV2 {
        amount
        currencyCode
      }
      totalTaxV2 {
        amount
        currencyCode
      }
      lineItems(first:10) {
        edges {
          node {
            id
            quantity
            title
            unitPrice {
              amount
              currencyCode
            }
            variant {
              ... on ProductVariant {
                id
              }
            }
          }
        }

      }
      customAttributes {
        key
        value
      }
    }
  }
}
`;

