import "./LoginForm.css";
import { useState } from "react";
import { ArrowRight } from "../icons/Arrow-right";
import { Link } from "react-router-dom";
import usersData from './testLogin.json'


const Signup = () => {

        // State for form inputs
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        
        // State for form submission result
        const [err, setError] = useState('');
        const [success, setSuccess] = useState('');
        
        

          // Handle signup form submission
            const handleSignUpSubmit = (e) => {
             e.preventDefault();
           
             // Checking if the email already exists
             const user = usersData.users.find(user => user.email === email);
             if (user) {
               setError('Email already exists.');
             }else if (password !== confirmPassword){ 
               setError('Password do not match');
               // redirect to dashboard
             }else {
               setSuccess('Account created successfully!');
               // redirect to dashboard
               window.location.pathname = '/Dashboard/Dash';
             }
            };

        return(
                // Sign-up form
                <>
                 <div className='login-form-wrapper'>
                    <div className="form-container">
                      <h4 className="login-form-title">Create new account</h4>
                      <form className="login-form" onSubmit={handleSignUpSubmit}>
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
                
                        <div className="input-field">
                          <label htmlFor="password">Confirm Password:</label>
                          <input
                            type="password"
                            id="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            required
                          />
                        </div>
                
                        {err && <p className="error-message">{err}</p>}
                        {success && <p className="success-message">{success}</p>} 
                
                        <button type="submit" className="submit-button"
                        onSubmit={() => (console.log(handleSignUpSubmit))}
                        > 
                        Sign-Up <span>{<ArrowRight />}</span></button>
                
                      </form>
                      <div className='divider-login'></div>
                      <div className='login-form-switch'>
                        <p>Already have an account? <Link className="form-switch" to='/Login'>Login</Link></p>
                      </div>
                    </div>
                    </div>
                </>
        
)};



export default Signup;