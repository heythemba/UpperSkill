import "./LoginForm.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "../icons/Arrow-right";
import { useForm } from "react-hook-form";

const Login = () => {

  // this is a predefined function from react-hook-form that is used to handle form submission
  // it returns an object with properties that we can use to register our form inputs
 const { register,
        handleSubmit,
        formState: { errors, isSubmitting }
        } = useForm();
 // this function is called when the form is submitted
  const onSubmit = async (data) => {
    //replace the resolve function with a request to the server and remove the console.log
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    
  }
  return(
    <>
      <div className='login-form-wrapper'>
        <div className="form-container">
          <h4 className="login-form-title">Login to your account </h4>
            <form className="login-form"  onSubmit={handleSubmit(onSubmit)}>
              <div className="input-field">
                <label htmlFor="email">Email:</label>
                <input        
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', 
                    { required: 'Email is required', 
                      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
                    })}
                />
                {/* built-in from react form hool to Throw an error if email not provided or missing */}
                {errors.email && <span className="error-message">{errors.email.message}</span> }
                {errors.email && errors.email.type === 'pattern' && <span className="error-message">Invalid email address</span> }
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
    </>
  )
};

export default Login;