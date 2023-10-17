import React from 'react';
import InputField from './CustomComponent/InputField';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Button from './CustomComponent/Button';
import axios from 'axios';
import toast from 'react-hot-toast';

const ForgotPassword = () => {

  const [email, setEmail ] = useState({
   email:''
  });

  // console.log(forget,"aaa")


  const handleSubmit = async (e) => {
    e.preventDefault();
  

    const data = {
      email: email.email
    }

    try {
      const res = await axios.post('https://test-backend.budgetlab.io/accounts/password_reset/', data);
      // console.log( res, "data")
      // Handle the response, e.g., show a success message or redirect
      console.log('Password Changed successfully', res.data);


    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Something Wrong ', error);

    }
    toast.success('Send Code Sucessfully  !');
    
  };





  const redirect = useNavigate();
  return (


    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
         Forgot your password
        </h2>
      </div>


        
        <div className='text-center pt-6 '>
          <p className='mt-6 mb-0'> Enter your email. We will send you a verification code</p>
        </div>




      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6"> */}

          <div className="space-y-6">

            <div className="mt-0">
              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                 autoComplete="email"
                required
              value={email.email}
              onChange={(value) => {
                setEmail((prev) => ({
                  ...prev, email: value.target.value
                }))
              }}      

              />
            </div>
          </div>

        

          



          {/* <div className="flex items-center justify-end">

            <div className="text-sm">
              <a className="font-semibold text-indigo-600 hover:text-indigo-500" >
                Reset Pasword
              </a>
            </div>
          </div> */}










          <div className='mt-4'>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit} >
              Send code
            </button>
          </div>
          {/* </form> */}


        </div>
      </div>
    </div>

  );
};

export default ForgotPassword;
