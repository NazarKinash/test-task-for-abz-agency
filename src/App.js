import React from "react";
const About = React.lazy(() => import("./components/About/About.jsx"));
const Baner = React.lazy(() => import("./components/Baner/Baner.jsx"));
const Footer = React.lazy(() => import("./components/Footer/Footer.jsx"));
const Header = React.lazy(() => import("./components/Header/Header.jsx"));
const Register = React.lazy(() => import("./components/Register/register.jsx"));
const Users = React.lazy(() => import("./components/Users/Users.jsx"));

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
