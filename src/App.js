import React, { Suspense } from "react";
const About = React.lazy(() => import("./components/About/About.jsx"));
const Baner = React.lazy(() => import("./components/Baner/Baner.jsx"));
const Footer = React.lazy(() => import("./components/Footer/Footer.jsx"));
const Header = React.lazy(() => import("./components/Header/Header.jsx"));
const Register = React.lazy(() => import("./components/Register/register.jsx"));
const Users = React.lazy(() => import("./components/Users/Users.jsx"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Baner />
        <About />
        <Users />
        <Register />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
