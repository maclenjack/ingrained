import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <head>
        <Head />
        <Script src="https://kit.fontawesome.com/56f037e773.js" crossOrigin="anonymous" />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
