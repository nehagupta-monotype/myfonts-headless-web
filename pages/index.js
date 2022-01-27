import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/global';
import StaffPicks from '../components/homepage/staffPicks';
import PostList from '../components/header/miniCart'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Myfonts.com
        </h1>
        <StaffPicks />
        <PostList />
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
