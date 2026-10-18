import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap"
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";


export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to the shop</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />

    </>

  );
};



// export default App