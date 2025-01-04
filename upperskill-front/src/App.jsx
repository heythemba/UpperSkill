import './App.css';
import { NavBar } from './navigation/navbar.jsx';
import Footer from './footer/footer.jsx';
//import HomePage from './Home/HomePage.jsx';
import AboutUS from './About/about.jsx';


const  App = () => {
  

  return (
    <>
    <div className="App">
      <NavBar isLogged={false}/>
       <AboutUS />
      <Footer isLogged={false}/>
    </div>
    </>
  )
}

export default App;
