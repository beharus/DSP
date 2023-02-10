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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/ОСП" element={<Osp />} />
        <Route path="/Латофлекс" element={<Latoflex />} />
        <Route path="/Фанера" element={<Fanera />} />
        <Route path="/Логистика" element={<Logistika />} />
        <Route path="/ДВП" element={<Dvp />} />
        <Route path="/ДСП" element={<Dsp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
