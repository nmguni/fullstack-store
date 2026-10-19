import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import Footer from "./components/Footer";
import { Outlet } from 'react-router'



export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />

    </>

  );
};



// export default App