import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import Products from "./Sections/Products";
import Solutions from "./Sections/Solutions";
import Industries from "./Sections/Industries";
import Clients from "./Sections/Clients";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
const App = () => {
  return (
     <>
      <Navbar />
      <main style={{ marginTop: 70 }}>
        <Home />
        <Products />
        <Solutions />
        <Industries />
        <Clients />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App