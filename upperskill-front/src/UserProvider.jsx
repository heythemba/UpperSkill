import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";



// eslint-disable-next-line react-refresh/only-export-components
export const UserStatus = createContext ();


 export const UserProvider = ({ children }) => {

  // Initialize quizTaken state based on localStorage
  const [quizTaken, setQuizTaken] = useState();

  const handleQuiz = async () => {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
    } catch (error) {
    throw new error('handling quiz went wrong');
      console.error(error);
    }
  }


  // a state to manage the login status of the user
   const [isLogged, setIsLogged] = useState();
  // useEffect is called to set isLogged to true if the user is already logged in
  useEffect(() => {
    // Check localStorage for login state
    const loggedIn = localStorage.getItem('isLogged');
    if (loggedIn === 'true') {
      setIsLogged(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
    localStorage.setItem('isLogged', 'true');
    window.location.pathname = '/Dashboard/dash';
  };

  // Getting all the information about the logged in user
  const [userData, setUserData] = useState({});

 // calling this function will send a request to backend to gel all information about the actual user
  const getUser = async () => {
    try {
      const res = await fetch('/api/auth/me');
      if (res.status === 200) {
        setUserData(await res.json());
        localStorage.setItem('userData', userData);
      } else {
        throw new Error('Unauthorized access');
      }
    } catch (error) {
      console.error(error);
    }
  };

      // Logout function  
      const handleLogout =  async () => {
              
              try {
      
                const res = await fetch('/api/auth/logout', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
                if (res.ok === true) {
                        toast.success('Logged out successfully');
                        window.location.pathname = '/login';
                        setIsLogged(false);
                        localStorage.setItem('isLogged', 'false');
                        localStorage.setItem('userData', undefined);
                        
                } else {
                  
                  throw new Error('Something went wrong');
                }
              } catch (error) {
                toast.error('Something went wrong');
                console.error(error);
              } 
      
            }

        return (
                <UserStatus.Provider value={{isLogged, setIsLogged, handleLogin, handleLogout, getUser, userData,handleQuizTaken, quizTaken}} >
                        {children}
                </UserStatus.Provider>
        )
};

UserProvider.propTypes = {
        children: PropTypes.node.isRequired
}; 
 