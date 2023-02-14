import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/form";
import "./App.css";
import Footer from "./components/Footer/footer";
import Osp from "./components/Osp/osp";
import Latoflex from "./components/Lato-flex/latoflex";
import Svyaz from "./components/Svyaz/svyaz";
import { Route, Routes } from "react-router-dom";
import Fanera from "./components/Fanera/fanera";
import Dvp from "./components/DVP/dvp";
import Logistika from "./components/Logistika/log";
import Dsp from "./components/DSP/dsp";
import Main from "./components/Main/Main";
import Postavshik from "./components/postavshik/postavshik";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Osp" element={<Osp />} />
        <Route path="/Main" element={<Main/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/Latoflex" element={<Latoflex />} />
        <Route path="/Fanera" element={<Fanera />} />
        <Route path="/Logistika" element={<Logistika />} />
        <Route path="/Dvp" element={<Dvp />} />
        <Route path="/Dsp" element={<Dsp />} />
        <Route path="/Postavshik" element={<Postavshik />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
