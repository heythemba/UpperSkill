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
import { useContext } from 'react';
import { UserStatus } from './UserProvider.jsx';




const  App = () => {

  const { isLogged } = useContext(UserStatus);

  const getUser = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.ok === true) {
        const userData = await res.json();
        console.log(userData);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="App">
    
      
      <NavBar isLogged={isLogged}/>
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

      <Footer isLogged={isLogged}/>
      <button onClick={()=> getUser()}>get user</button>
    </div>
    </>
  )

}

export default App;
