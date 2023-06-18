// import Header from "./Header/Header";
// import Nav from "./Nav/Nav";
import { FC } from "react";
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: FC<{
  children?: any,
  categories?: any,
  seo?: any,
}> = ({ children, categories, seo }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
