import './App.css';
import { NavBar } from './navbar/navbar.jsx';
import Footer from './footer/footer.jsx';
//import HomePage from './Home/HomePage.jsx';
//import AboutUs from './About/about.jsx';
//import LoginForm from './Login/LoginForm.jsx';
//import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dasboard/Dashboard.jsx';

const  App = () => {

 
  /*return (
    <>
    <div className="App">
      <NavBar isLogged={false}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Sign-Up" element={<LoginForm formType={true}/>} />
          <Route path="*" element={<HomePage />} />
        </Routes>

      <Footer isLogged={false}/>
    </div>
    </>
  )*/

    return (
      <div className="App">
      <NavBar isLogged={true}/>
        <Dashboard />
        <Footer isLogged={true}/>
        </div>
    )
}

export default App;
