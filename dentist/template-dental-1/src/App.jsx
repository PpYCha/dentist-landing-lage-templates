import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroDivider from "./components/HeroDivider";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <HeroDivider />
      </main>
    </>
  );
}

export default App;
