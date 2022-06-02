import Head from 'next/head';
import { FC, ReactNode } from 'react';
import NavBar from '../ui/NavBar';

interface Props {
  title: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Emerson Asto'}</title>
        <meta name='author' content='Emerson Maximo Asto Rodriguez' />
        <meta name='description' content='Portfolio of Emerson Asto' />
        <meta
          name='keywords'
          content='Emerson Asto, Emerson Asto Portfolio, developer'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <NavBar />

      <main>{children}</main>
    </>
  );
};

export default Layout;
