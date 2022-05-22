import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Home/Home';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
