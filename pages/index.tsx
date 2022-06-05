import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="eastor112">
      <div className={styles.container}></div>
    </Layout>
  );
};

export default Home;
