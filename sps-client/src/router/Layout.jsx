import { Header } from '../component/template/Header.jsx';
import { Aside } from '../component/template/Aside.jsx';
import { Outlet } from 'react-router-dom';
import { Footer } from '../component/template/Footer.jsx';
import { LoginModal } from '../component/login/LoginModal.jsx';

export const Layout = () => {
  return (
    <>
      <Header />
      <LoginModal />
      <Outlet />
      <Aside />
      <Footer />
    </>
  );
};
