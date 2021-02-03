import React from "react";
import About from "./components/About/About.jsx";
import Baner from "./components/Baner/Baner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/register.jsx";
import Users from "./components/Users/Users.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Baner />
      <About />
      <Users />
      <Register />
      <Footer />
    </div>
  );
};

export default App;
