import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home_page/Home";
import WhatsAppChat from "./WhatsAppChat";
import Algo from "./pages/Algorithms/Algo";
import Indicator from "./pages/Indicators/Indicator";
import Contact from "./pages/contactus/Contact";
import Nav from "./component/navbar/Nav";
import Terms from "./pages/terms/Terms";
import Footer from "./component/footer/Footer";

export default function App() {
  return (
    <div>
      <WhatsAppChat />
       {/* <Subnav /> */}
      <Nav /> 
      <Routes>
        {[
          { path: "/", elem: <Home /> },
          { path: "/algo", elem: <Algo /> },
          { path: "/policy", elem: <Indicator /> },
          { path: "/contact", elem: <Contact /> },
          { path: "/terms", elem: <Terms /> },
          // { path: "/product/:productId", elem: <Product /> },
        ].map((obj, index) => {
          return <Route key={index} element={obj.elem} path={obj.path} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}
