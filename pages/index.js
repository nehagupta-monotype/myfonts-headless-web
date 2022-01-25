import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/global';
import StaffPicks from '../components/homepage/staffPicks';
import { withSessionSsr} from "../lib/withSession";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Myfonts.com
        </h1>
        <StaffPicks />
      </main>
    </div>
  )
}

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
  const { userData } = req.session;
  console.log("in page", req.session);
  return {
    props: { user: req.session },
  };
});

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
