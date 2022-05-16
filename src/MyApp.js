import React from "react";

import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import About from "./components/About";
import Contact from "./components/Contact";

const MyApp = () => {
  return (
    <>
      <Nav />
      <FoodViolations />
      <About />
      <Contact />
    </>
  );
};

export default MyApp;
