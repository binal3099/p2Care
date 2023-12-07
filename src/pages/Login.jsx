import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    const history = useHistory()

    const loginHandler = async (data) => {
        try {
            const loginData = await axios.post('http://localhost:3001/user/login', data)
            console.log(loginData);
            history.push('/info')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login text-center '>
            <h1 className='text-center'>Log in</h1>
            <Formik
                initialValues={{
                    Email: '',
                    Password: '',
                }}
                onSubmit={async (values) => {
                    // console.log(values);
                    loginHandler(values)
                }}
            >
                <Form>
                    <div className="form-input text-center">
                        <div>
                            <label htmlFor="Email" className='m-2'>Email</label>
                            <Field type="email" name="Email" className='m-2' placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="Password" className='m-2'>Password</label>
                            <Field type="password" name="Password" className='m-2' placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Login
