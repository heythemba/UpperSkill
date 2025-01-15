import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import usersData from './testLogin';
import { ArrowRight } from "../icons/Arrow-right";


const Login = () => {

        // State for form inputs
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        
        // State for form submission result
        const [err, setError] = useState('');
        const [success, setSuccess] = useState('');
        
          
      
        

        // Handle login form submission
        const handleLoginSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Checking the entered email and password with the data
        const user = usersData.users.find(user => user.email === email && user.password === password);

        if (user) {
       setSuccess('Login successful!');
       // redirect to dashboard
        } else {
       setError('Invalid email or password.');
        }
   };

        return(
                <>
                 <div className='login-form-wrapper'>
                    <div className="form-container">
                      <h4 className="login-form-title">Login to your account </h4>
                      <form className="login-form" onSubmit={handleLoginSubmit}>
                        <div className="input-field">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                          />
                        </div>
                
                        <div className="input-field">
                          <label htmlFor="password">Password:</label>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                          />
                        </div>
                
                        {err && <p className="error-message">{err}</p>}
                        {success && <p className="success-message">{success}</p>} 
                
                        <button type="submit" className="submit-button" 
                        onClick={() => (window.location.pathname = '/Dashboard/Dash')}
                        > 
                          Login <span className='arrow-icon'>{<ArrowRight />}</span></button>
                
                      </form>
                      <div className='divider-login'></div>
                      <div className='login-form-switch'>
                        <p>Don&apos;t have an account? <Link className="form-switch" to='/Signup'>Sign-Up</Link></p>
                      </div>
                    </div> 
                    </div>
                </>
        )
};

export default Login;