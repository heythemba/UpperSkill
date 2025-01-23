import "./LoginForm.css";
import { ArrowRight } from "../icons/Arrow-right";
import { Link } from "react-router-dom";
import { useForm , Controller } from "react-hook-form";
import {toast, Toaster} from "react-hot-toast";
import { useContext } from 'react';
import { UserStatus } from '../UserProvider.jsx';




const Signup = () => {

    const { handleLogin } = useContext(UserStatus);

  // this is a predefined function from react-hook-form that is used to handle form submission
  // it returns an object with properties that we can use to register our form inputs
  const { register,
          handleSubmit,
          control,
          getValues,
          formState: { errors, isSubmitting }
          } = useForm();
         // this function is called when the form is submitted
          const onSubmit = async (data) => {
            

            try {
              const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                });
                console.log(data);
                  if (res.status === 201) {
                    toast.success('Account created successfully');
                    handleLogin();
                } else if (res.status === 400) {
                  toast.error('Invalid user data');
                  throw new Error('Invalid user data');
                } else {
                  toast.error('Something went wrong');
                  throw new Error('Something went wrong');
                }
            } catch (error) {
              console.error(error);
            }
              
              
        }

        return(
                // Sign-up form
                <>
                 <div className='login-form-wrapper'>
                    <div className="form-container">
                      <h4 className="login-form-title">Create new account</h4>
                      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                      <div className="input-field">
                          <label htmlFor="fullName">Full Name:</label>
                          <input
                            type="fullname"
                            id="fullname"
                            placeholder="Full Name"
                            {...register('fullName',
                              { required: 'Full Name is required', 
                                pattern: /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/
                              }
                            )}
                          />
                          {errors.fullName && <span className="error-message">{errors.fullName.message}</span> }
                          {errors.fullName && errors.fullName.type === 'pattern' && <span className="error-message">Invalid name</span> }
                        </div>

                        <div className="input-field">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            {...register('email',
                              { required: 'Email is required', 
                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
                              }
                            )}
                          />
                          {errors.email && <span className="error-message">{errors.email.message}</span> }
                          {errors.email && errors.email.type === 'pattern' && <span className="error-message">Invalid email address</span> }
                        </div>

                        <div className="input-field">
                          <label htmlFor="username">Username :</label>
                          <input
                            type="username"
                            id="username"
                            placeholder="Username"
                            {...register('username',
                              { required: 'User Name is required', 
                                pattern: /^[a-z0-9._]+$/
                              }
                            )}
                          />
                          {errors.username && <span className="error-message">{errors.username.message}</span> }
                          {errors.username && errors.username.type === 'pattern' && <span className="error-message">Invalid Username</span> }
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
                              }
                            )}
                          />
                          {errors.password && <span className="error-message">{errors.password.message}</span> }
                          {errors.password && errors.password.type === 'minLength' && <span className="error-message">Password must be at least 6 characters</span> }
                        </div>
                
                        <div className="input-field">
                          <label htmlFor="confirmPassword">Confirm Password:</label>
                          <input
                            type="Password"
                            id="password"
                            placeholder="Confirm Password"
                            {...register('confirmPassword',
                              { required: 'Confirm password is required', 
                                validate: value => value === getValues('password')  || "Passwords do not match",
                                minLength: 6,
                                maxLength: 20
                              }
                            )}
                          />
                          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword.message}</span> }
                          {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && <span className="error-message">Password must be at least 6 characters</span> }
                        </div>

                        <div className="checkbox-field">
                        <Controller
                          name="isStudent"
                          control={control}
                          defaultValue={true}
                          render={({ field }) => (
                          <label className="checkbox-label">
                            <input className="checkbox-input"
                            type="checkbox"
                            {...field}
                              onChange={(e) => field.onChange(!e.target.checked)}
                            />
                            I am a Teacher.
                          </label>
                          )}
                          />
                        </div>
                        
                        <button type="submit" className="submit-button" disabled={isSubmitting}
                        > 
                        {isSubmitting ? "Creating ..." : "Create Account"} <span className='arrow-icon'>{<ArrowRight />}</span>
                        </button>
                
                      </form>
                      <div className='divider-login'></div>
                      <div className='login-form-switch'>
                        <p>Already have an account? <Link className="form-switch" to='/Login'>Login</Link></p>
                      </div>
                    </div>
                    </div>
                    <Toaster
                      position="top-center"
                      reverseOrder={false}
                      />
                </>
        
)};



export default Signup;