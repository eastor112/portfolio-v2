import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import Layout from '../components/layouts/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='eastor112'>
      <div className={styles.container}>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </div>
    </Layout>
  );
};

export default Home;
