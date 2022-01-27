import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/global';
import StaffPicks from '../components/homepage/staffPicks';
import { useMutation } from '@apollo/client';
import { CREATE_CART } from '../services/graphql/cart';

export default function Home() {
  const [addToCart, { data, loading, error }] = useMutation(CREATE_CART);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Myfonts.com
        </h1>
        <form
        onSubmit={e => {
          e.preventDefault();
          addToCart({ variables: {
              "cartInput": {
                "lines": [
                  {
                    "quantity": 1,
                    "merchandiseId": "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQwMzA2MTM3MTA4Nw=="
                  }
                ],
                "attributes": {
                  "key": "cart_attribute",
                  "value": "This is a cart attribute"
                }
              }
            }
          });
        }}
      >
        <button type="submit">Add To Cart</button>
      </form>

        <StaffPicks />
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
