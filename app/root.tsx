import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react';
import { LinksFunction, MetaFunction } from '@remix-run/node';
import './tailwind.css';

import Layout from '~/layouts/Layout';

export const meta: MetaFunction = () => {
  return [
    { charSet: 'utf-8' },
    { title: 'Welding Helmets Online' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: 'icon', href: '/images/assets/ico.svg', type: 'image/jpg' }];
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
