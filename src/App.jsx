import React from "react";
import Header from "./components/header";
import Help from "./components/help";
import Recommended from "./components/recomended";
import ContactUs from "./components/contactus";

function App() {
  return (
    <>
      <Header />
      <Help />
      {/* <Recommended /> */}
      <ContactUs />
    </>
  );
}

export default App;
