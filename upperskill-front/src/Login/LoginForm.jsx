import { useState } from 'react';
import './LoginForm.css';
import usersData from './testLogin';
import { ArrowRight } from '../icons/Arrow-right';
import PropTypes from 'prop-types';




const LoginForm = (
  {formType=false}
) => {
  
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for form submission result
  const [err, setError] = useState('');
  const [success, setSuccess] = useState('');

  // switch between login and sign-up form
  const [isFormType, setFormType] = useState(formType);

  const handleFormType = () => {
    setFormType(!isFormType);
  };


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
    }
   };

  return (

    // Login form
  <div className='login-form-wrapper'>
    {!isFormType ? ( // if formType is true, show login form
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
        > 
          Login <span className='arrow-icon'>{<ArrowRight />}</span></button>

      </form>
      <div className='divider-login'></div>
      <div className='login-form-switch'>
        <p>Don&apos;t have an account? <span className='set-form' onClick={() => handleFormType()}>Sign up</span></p>
      </div>
    </div> 
    
  
  ) : ( // if formType is false, show sign-up form

    // Sign-up form
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
       
        > 
        Sign-Up <span>{<ArrowRight />}</span></button>

      </form>
      <div className='divider-login'></div>
      <div className='login-form-switch'>
        <p>Already have an account? <span className='set-form' onClick={() => handleFormType()}>Login</span></p>
      </div>
    </div>

    ) }
  </div>
  );
};

LoginForm.propTypes = {
  formType: PropTypes.bool,
};


export default LoginForm;
