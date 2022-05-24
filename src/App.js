import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Home from './Home/Home';
import Purchase from './Purchase/Purchase';
import Blogs from './Blogs/Blogs';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import RequireAuth from './Login/RequireAuth';
import NotFound from './NotFound/NotFound';
import MyPortfolio from './MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/purchase' element={<RequireAuth><Purchase /></RequireAuth>} />

      <Route path='/blogs' element={<Blogs />} />
      <Route path='/portfolio' element={<MyPortfolio />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
