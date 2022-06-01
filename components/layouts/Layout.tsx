import Head from 'next/head';
import { FC, ReactNode } from 'react';

interface props {
  children: ReactNode;
  title?: string;
}

const Layout: FC<props> = ({ children, title }) => {
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

      <main>{children}</main>
    </>
  );
};

export default Layout;
