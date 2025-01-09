import './App.css';
import { NavBar } from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
import HomePage from './Home/HomePage.jsx';
import AboutUs from './About/about.jsx';
import LoginForm from './Login/LoginForm.jsx';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './404/404.jsx';
import WebApp from './WebApp/WebApp.jsx'
import { useEffect, useState } from 'react';

const isLogged = false;

const  App = () => {
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
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Sign-Up" element={<LoginForm formType={true}/>} />
          <Route path='/Dashboard/*' element={<WebApp />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      <Footer isLogged={sessionType}/>
    </div>
    </>
  )

}

export default App;
