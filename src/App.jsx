import Card from "./components/cards/Card";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Hero from "./components/hero/Hero";
import girl from "./assets/images/girl.svg";
import Product from "./components/products/Product";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card path="/card" />
      <About />
      <Product />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
