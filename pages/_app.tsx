import React from 'react';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
