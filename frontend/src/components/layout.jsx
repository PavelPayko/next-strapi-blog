import Header from "./header";
import Nav from "./nav";

const Layout = ({ children, categories, seo }) => (
  <>
    {/* <Nav categories={categories} /> */}
    <Header />
    {children}
  </>
);

export default Layout;
