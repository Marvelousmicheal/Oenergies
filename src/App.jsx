
import Header from "./assets/components/Header";

import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./assets/pages/About";
import Carreer from "./assets/pages/Carreer";

function App() {


  return (
    <>
     <Header/>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/join-us" element={<Carreer/>}/>

     </Routes>

     <Footer/>
    </>
  );
}

export default App
