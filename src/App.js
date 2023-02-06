import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/form';
import './App.css';
import Footer from './components/Footer/footer';
import Osp from './components/Osp/osp';
import Latoflex from './components/Lato-flex/latoflex';
import Svyaz from './components/Svyaz/svyaz';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path = '/osp' element={<Osp/>}/>
        <Route path = '/latoflex' element={<Latoflex/>}/>
      </Routes>
        <Footer />
    </>
  );
}

export default App;
