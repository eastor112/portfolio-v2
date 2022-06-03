import { Box, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import SideBar from '../ui/SideBar';
import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const drawerWidth = 240;

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <Box sx={{ display: 'flex' }}>
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

      <SideBar />

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
