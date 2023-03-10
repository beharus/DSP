import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/footer";
import Osp from "./components/Osp/osp";
import Latoflex from "./components/Lato-flex/latoflex";
import { Route, Routes } from "react-router-dom";
import Fanera from "./components/Fanera/fanera";
import Dvp from "./components/DVP/dvp";
import Dsp from "./components/DSP/dsp";
import Main from "./components/Main/Main";
import Postavshik from "./components/postavshik/postavshik";
import TkPartner from "./components/Tk_Partner/tkPartner";
import Contact from "./components/Contact/contact";
import Logistika from "./components/Logistika/log";
import AboutKompany from "./components/AboutKompany/AboutKompany";

function App() {
  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path="/Osp" element={<Osp />} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/Latoflex" element={<Latoflex />} />
        <Route path="/logistika" element={<Logistika />} />
        <Route path="/Fanera" element={<Fanera />} />
        <Route path="/Dvp" element={<Dvp />} />
        <Route path="/Dsp" element={<Dsp />} />
        <Route path="/Postavshik" element={<Postavshik />} />
        <Route path="/TkPartner" element={<TkPartner />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/aboutCompany" element={<AboutKompany />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
