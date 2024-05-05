import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Main/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import ToggleTheme from "../../Components/Common/Main/ToggleTheme";

const Layout = () => {
  return (
    <ThemeProvider>
      <Header>
        <ToggleTheme />
      </Header>
      <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
    </ThemeProvider>
  );
};

export default Layout;
