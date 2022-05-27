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
import Dashboard from './Dashboard/Dashboard';
import BuyDetail from './BuyDetail/BuyDetail';
import MyProfile from './MyProfile/MyProfile';
import AddReview from './AddReview/AddReview';
import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase.init';

export const UserDataProvider = createContext();

function App() {
  const [user, setUser] = useState({});
  // console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(`https://enigmatic-sierra-69090.herokuapp.com/user/${user?.email}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        setUser({
          email: user?.email,
          name: user?.displayName,
        });

        // console.log(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  return (
    <UserDataProvider.Provider value={[user, setUser]}>
    <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/purchase' element={<RequireAuth><Purchase /></RequireAuth>} />
      <Route path='/parts/:id' element={<RequireAuth><BuyDetail /></RequireAuth>} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/addreview' element={<AddReview />} />
      <Route path='/portfolio' element={<MyPortfolio />} />
      <Route path='/profile' element={<MyProfile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard></Dashboard>} />

      <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      </UserDataProvider.Provider>
  );
}

export default App;
