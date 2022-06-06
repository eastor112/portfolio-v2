import type { NextPage } from 'next';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layouts/Layout';

const Blog: NextPage = () => {
  return (
    <Layout title="eastor112">
      <h1 className={styles.container}> BLOG </h1>
    </Layout>
  );
};

export default Blog;
