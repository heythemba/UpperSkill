import './App.css';
import { NavBar } from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
import HomePage from './Home/HomePage.jsx';
import AboutUs from './About/about.jsx';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './404/404.jsx';
import WebApp from './WebApp/WebApp.jsx'
import Login from './Login/Login.jsx';
import Signup from './Login/Signup.jsx';
import FAQs from './FAQs/FAQs.jsx';
import { useContext, useEffect } from 'react';
import { UserStatus } from './UserProvider.jsx';





const  App = () => {

  const { isLogged, getUser, userData } = useContext(UserStatus);

  useEffect(() => {
    if (isLogged){

      getUser();
    }
    
  }, [getUser, isLogged]);


  return (
    <>
    <div className="App">
    
      
      <NavBar isLogged={isLogged}  UserName={userData.username}/>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/Home" element={ <HomePage />} />
          <Route path="/About" element={ <AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Log-in" element={<Login />} />
          <Route path="/Sign-Up" element={<Signup />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path='/Dashboard' element={<WebApp /> }/>
          <Route path='/FAQs' element={<FAQs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      <Footer isLogged={isLogged}/>
    </div>
    </>
  )

}



export default App;
