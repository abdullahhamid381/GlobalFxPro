import "./App.css";
import AboutUs from "./components/Home/AboutUs";
import Hero from "./components/Home/Hero";
import How from "./components/Home/How";
import Price from "./components/Home/Price";
import Record from "./components/Home/Record";
import Review from "./components/Home/Review";
import WhyChoose from "./components/Home/WhyChoose";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar/>
  <Hero/>
  <How/>
  <Price/>
 <Record/>
 <WhyChoose/>
 <AboutUs/>
  </>
  );
}

export default App;
