import {useForm} from 'react-hook-form';
import { ArrowRight } from 'react-feather';
import { toast, Toaster} from 'react-hot-toast';
import { useContext } from 'react';
import { UserStatus } from '../../UserProvider.jsx';
import './CreateCourseForm.css';




const CreateCourseForm = () => {

        const { handleCourseCreation} = useContext(UserStatus);

        const { register,
                handleSubmit,
                formState: { errors, isSubmitting }
                } = useForm();

         // this function is called when the form is submitted
         const onSubmit = async (data) => {
            

                try {
                  const res = await fetch('/api/course/create', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    });
                    console.log(data);
                      if (res.status === 201) {
                        toast.success('Course created successfully');
                        handleCourseCreation();
                    } else {
                      toast.error('Something went wrong');
                      throw new Error('Something went wrong');
                    }
                } catch (error) {
                  console.error(error);
                }
                  
                  
            }

        return (
                <>
                <div className='course-form-wrapper'>
                   <div className="form-container">
                     <h4 className="course-form-title">Create Course</h4>
                     <form className="course-form" onSubmit={handleSubmit(onSubmit)}>

                     <div className="input-field">
                         <label htmlFor="title">Course Title:</label>
                         <input
                           type="title"
                           id="title"
                           placeholder="Course Title"
                           {...register('title',
                             { required: 'Course Title is required', 
                               pattern: /^[a-zA-Z\s]+$/
                             }
                           )}
                         />
                         {errors.title && <span className="error-message">{errors.title.message}</span> }
                         {errors.title && errors.title.type === 'pattern' && <span className="error-message">Invalid Course title</span> }
                       </div>

                       <div className="input-field">
                         <label htmlFor="description">Description:</label>
                         <input
                           type="description"
                           id="description"
                           placeholder="Description"
                           {...register('description',
                                {required: 'Description is required' }
                           )}
                         />
                         {errors.description && <span className="error-message">{errors.description.message}</span> }
                       </div>

                       <div className="input-field">
                         <label htmlFor="content">Content :</label>
                         <input
                           type="content"
                           id="content"
                           placeholder="Content"
                           {...register('content',
                                {required: 'Content is required'}
                           )}
                         />
                         {errors.content && <span className="error-message">{errors.content.message}</span> }
                       </div>
               

               
                       <div className="Select-field">
                        <select {...register("topic")}>
                        <option value="Health and Personal Development">Health and Personal Development</option>
                        <option value="Language and Communication">Language and Communication</option>
                        <option value="Creative Skills">Creative Skills</option>
                        <option value="Business and Management">Business and Management</option>
                        <option value="Technology and Programming">Technology and Programming</option>
                        <option value="STEM (Science, Technology, Engineering, Mathematics)">STEM (Science, Technology, Engineering, Mathematics)</option>
                        </select>
                       </div>

                       
                       <button type="submit" className="submit-button" disabled={isSubmitting}
                       > 
                       {isSubmitting ? "Creating ..." : "Create Course"} <span className='arrow-icon'>{<ArrowRight />}</span>
                       </button>
               
                     </form>
                   </div>
                   </div>
                   <Toaster
                     position="top-center"
                     reverseOrder={false}
                     />
               </>
        )
}

export default CreateCourseForm;