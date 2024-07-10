import { Outlet } from '@remix-run/react';
import { Header, Footer } from '~/layouts';

export default function Layout() {
  return (
    <div id='root' className='h-full font-poppins'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
