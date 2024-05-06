import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Main/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import ToggleTheme from "../../Components/Common/Main/ToggleTheme";
import CustomLink from "../../Components/Common/Main/CustomLink";
import Footer from "../../Components/Common/Main/Footer";

const Layout = () => {
  return (
    <ThemeProvider>
      <Header>
        <div className="flex gap-10">
          <CustomLink to="/">home</CustomLink>
          <CustomLink to="/about">about</CustomLink>
          <CustomLink to="/products">products</CustomLink>
          <CustomLink to="/signin">signin</CustomLink>
          <CustomLink to="/signout">signout</CustomLink>
        </div>
        <ToggleTheme />
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
      <Footer>
        <p>Follow us on social media for the latest updates and promotions.</p>
      </Footer>
    </ThemeProvider>
  );
};

export default Layout;
