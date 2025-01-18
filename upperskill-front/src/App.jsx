import './App.css';
import { NavBar } from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
import HomePage from './Home/HomePage.jsx';
import AboutUs from './About/about.jsx';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './404/404.jsx';
import WebApp from './WebApp/WebApp.jsx'
import { useEffect, useState } from 'react';
import Login from './Login/Login.jsx';
import Signup from './Login/Signup.jsx';
import FAQs from './FAQs/FAQs.jsx';

const isLogged = false;

const  App = () => {

  // this is a state to set path to dashboard if user is logged in
  const [sessionType, setSession] = useState(isLogged);

  useEffect(() => {
    if ((window.location.pathname === '/Dashboard')
      || (window.location.pathname === '/Dashboard/Dash')
      || (window.location.pathname === '/Dashboard/')) {
      setSession(true);
    }
  }, []);

  

  return (
    <>
    <div className="App">
      <NavBar isLogged={sessionType}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Log-in" element={<Login />} />
          <Route path="/Sign-Up" element={<Signup/>} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path='/Dashboard/*' element={<WebApp />}/>
          <Route path='/FAQs' element={<FAQs />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      <Footer isLogged={sessionType}/>
    </div>
    </>
  )

}

export default App;
