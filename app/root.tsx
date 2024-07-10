import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react';
import { MetaFunction } from '@remix-run/node';
import './tailwind.css';

import Layout from '~/layouts/Layout';

export const meta: MetaFunction = () => {
  return [
    { charSet: 'utf-8' },
    { title: 'New Remix App' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
