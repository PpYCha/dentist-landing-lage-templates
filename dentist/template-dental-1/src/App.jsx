import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroDivider from "./components/HeroDivider";
import SeeResult from "./components/SeeResult";
import NoMoreSile from "./components/NoMoreSile";
import SeeResultsCategory from "./components/SeeResultsCategory";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <HeroDivider />
        <SeeResult />
        <hr />
        <NoMoreSile />
        <hr />
        <SeeResultsCategory />
        <hr />
      </main>
    </>
  );
}

export default App;
