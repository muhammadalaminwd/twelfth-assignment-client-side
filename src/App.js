import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Home/Home';
import Purchase from './Purchase/Purchase';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/purchase' element={<Purchase />} />
      <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
