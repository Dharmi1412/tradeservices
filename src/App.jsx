import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home_page/Home";
import WhatsAppChat from "./WhatsAppChat";
import Contact from "./pages/contactus/Contact";
import Nav from "./component/navbar/Nav";
import Terms from "./pages/terms/Terms";
import Footer from "./component/footer/Footer";
import Payment from "./pages/payment/Payment";

export default function App() {
  return (
    <div>
      <WhatsAppChat />
      <Nav /> 
      <Routes>
        {[
          { path: "/", elem: <Home /> },
          { path: "/contact", elem: <Contact /> },
          { path: "/terms", elem: <Terms /> },
          { path: "/access", elem: <Payment /> },
        ].map((obj, index) => {
          return <Route key={index} element={obj.elem} path={obj.path} />;
        })}
      </Routes>
      <Footer />
    </div>
  );
}
