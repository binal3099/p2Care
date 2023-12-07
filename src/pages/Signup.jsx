import React from 'react'
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function Singup() {
    const history = useHistory()

    const signupHandler = async (data) =>{
        try {
            const signupData = await axios.post('http://localhost:3001/user/add', data)
            console.log(signupData.data);
            history.push('/login')
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
     <div className='login text-center'>
                <h1 className='text-center'>Sign Up</h1>
                <Formik
                    initialValues={{
                        Username: '',
                        Name: '',
                        Email: '',
                        profileImage: '',
                        Password: '',
                    }}
                    onSubmit={async (values, actions) => {
                        signupHandler(values);
                        console.log(values);
                        actions.resetForm();
                    }}
                >
                    <Form>

                        <div className="form-input text-center">
                            <div>
                                <label className='me-3' htmlFor="Username">First Name</label>
                                <Field type="text" name="Username" />
                            </div>
                            <div>
                                <label className='me-3' htmlFor="Name">Name</label>
                                <Field type="text" name="Name" />
                            </div>
                            <div>
                                <label className='me-3' htmlFor="Email">Email</label>
                                <Field type="email" name="Email" />
                            </div>
                            <div>
                                <label className='me-3' htmlFor="profileImage">profileImage</label>
                                <Field type="file" name="profileImage" />
                            </div>
                            <div>
                                <label className='me-3' htmlFor="Password">Password</label>
                                <Field type="password" name="Password" />
                            </div>
                        </div>
                        <button type="submit">SignUp</button>
                    </Form>
                </Formik>
            </div> 
    </>
  )
}

export default Singup
