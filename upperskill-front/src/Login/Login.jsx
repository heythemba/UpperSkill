import "./LoginForm.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "../icons/Arrow-right";
import { useForm } from "react-hook-form";
import {toast, Toaster } from "react-hot-toast";
import { useContext } from 'react';
import { UserStatus } from '../UserProvider.jsx';

const Login = () => {

  const { handleLogin } = useContext(UserStatus);

 

  // this is a predefined function from react-hook-form that is used to handle form submission
  // it returns an object with properties that we can use to register our form inputs
 const { register,
        handleSubmit,
        formState: { errors, isSubmitting }
        } = useForm();
 // this function is called when the form is submitted
 const onSubmit = async (data) => {
            
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      });
      console.log(data);
        if (res.status === 200) {
          toast.success('Logged in successfully');
          handleLogin();
      } else if (res.status === 400) {
        toast.error('Invalid username or password');
        throw new Error('Invalid username or password');
      } else {
        toast.error('Something went wrong');
        throw new Error('Something went wrong');
      }
  } catch (error) {
    console.error(error);
  }
 }
  return(
    <>
      <div className='login-form-wrapper'>
        <div className="form-container">
          <h4 className="login-form-title">Login to your account </h4>
            <form className="login-form"  onSubmit={handleSubmit(onSubmit)}>
              <div className="input-field">
                <label htmlFor="username">Username:</label>
                <input        
                  type="username"
                  id="username"
                  placeholder="User Name"
                  {...register('username', 
                    { required: 'Username e is required', 
                      pattern: /^[a-z0-9._]+$/
                    })}
                />
                {/* built-in from react form hool to Throw an error if username not provided or missing */}
                {errors.username && <span className="error-message">{errors.username.message}</span> }
                {errors.username && errors.username.type === 'pattern' && <span className="error-message">Invalid username address</span> }
              </div>
                
              <div className="input-field">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  {...register('password', 
                    { required: 'Password is required', 
                      minLength: 6,
                      maxLength: 20
                    })}
                  />
                  {/* built-in from react form hool to Throw an error if password lenght is less than 6 or missing */}
                    {errors.password && <span className="error-message">{errors.password.message}</span> }
                    {errors.password && errors.password.type === 'minLength' && <span className="error-message">Password must be at least 6 characters</span> }
                </div>
                <button type="submit" 
                className="submit-button"
                disabled={isSubmitting}
                >{isSubmitting ? "Logging in" : "Login"} <span className='arrow-icon'>{<ArrowRight />}</span></button>
                
            </form>
          <div className='divider-login'></div>
          <div className='login-form-switch'>
            <p>Don&apos;t have an account? <Link className="form-switch" to='/Signup'>Sign-Up</Link></p>
          </div>
        </div> 
        </div>
        <Toaster
                      position="top-center"
                      reverseOrder={false}
                      />
    </>
  )
};

export default Login;