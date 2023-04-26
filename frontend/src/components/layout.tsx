// import Header from "./Header/Header";
// import Nav from "./Nav/Nav";
import { FC } from "react";

const Layout: FC<{
  children?: any,
  categories?: any,
  seo?: any,
}> = ({ children, categories, seo }) => (
  <>
    {/* <Nav categories={categories} /> */}
    {/* <Header /> */}
    {children}
  </>
);

export default Layout;
