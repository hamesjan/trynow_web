import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import Background from "./Background/Background";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Background />
      <MainNavigation title={props.title} username={"John"} />
      <main>{props.children}</main>
      <Footer />
      </div>

    </Fragment>

  );
};

export default Layout;
