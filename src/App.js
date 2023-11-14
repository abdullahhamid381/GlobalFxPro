import { Routes } from "react-router/dist";
import "./App.css";
import AboutUs from "./components/Home/AboutUs";
import Faq from "./components/Home/Faq";
import Footer from "./components/Home/Footer";
import Hero from "./components/Home/Hero";
import How from "./components/Home/How";
import Plan from "./components/Home/Plan";
import Price from "./components/Home/Price";
import Record from "./components/Home/Record";
import Review from "./components/Home/Review";
import WhyChoose from "./components/Home/WhyChoose";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";


function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<HomePage/>}/>
<Route path='/about' element={<AboutPage/>
}/>
<Route path='/contact' element={<ContactPage/>}/>
</Routes>

 

 

  </>
  );
}

export default App;
