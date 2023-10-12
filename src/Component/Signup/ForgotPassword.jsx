import React from 'react';
import InputField from './CustomComponent/InputField';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {
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
            Enter Your Email
          </h2>
        </div>




  
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6"> */}
          <div className="space-y-6">

            <div className="mt-2">
              <InputField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                // value={logindata.email}
                // onChange={(value) => {
                //   setLoginData((prev) => ({
                //     ...prev, email: value.target.value
                //   }))
                // }}

              />
            </div>
          </div>



          <div className="flex items-center justify-end">

<div className="text-sm">
  <a  className="font-semibold text-indigo-600 hover:text-indigo-500">
    Reset Pasword
  </a>
</div>  
</div>

          

           

          

          
          

          <div className='mt-4'>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Forget Password 
            </button>
          </div>
          {/* </form> */}


        </div>
      </div>
      </div>
  
  );
};

export default ForgotPassword;
