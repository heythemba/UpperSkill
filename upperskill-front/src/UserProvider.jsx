import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";


// eslint-disable-next-line react-refresh/only-export-components
export const UserStatus = createContext ();


 export const UserProvider = ({ children }) => {

   const [isLogged, setIsLogged] = useState();
  
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
                } else {
                  
                  throw new Error('Something went wrong');
                }
              } catch (error) {
                toast.error('Something went wrong');
                console.error(error);
              } 
      
            }

        return (
                <UserStatus.Provider value={{isLogged, setIsLogged, handleLogin, handleLogout}} >
                        {children}
                </UserStatus.Provider>
        )
};

UserProvider.propTypes = {
        children: PropTypes.node.isRequired
}; 
 