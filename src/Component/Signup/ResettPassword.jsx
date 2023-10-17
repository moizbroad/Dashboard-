import React from 'react'
import InputField from './CustomComponent/InputField'
import { Navigate } from 'react-router'


const ResettPassword = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Confirm password
        </h2>
      </div>





      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6"> */}

          <div className="space-y-1">
            <div className="mt-1">
              <InputField
              placeholder=" Password"
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              // value={signup.password}
              // onChange={(value) => {
              //   setSignup((prev) => ({
              //     ...prev, password: value.target.value
              //   }))
              // }}

              />
            </div>
          </div>



          <div className="space-y-1">
            <div className="mt-1">
              <InputField
               placeholder="Confirm Password"
                label="Confirm password"
                id="password"
                name="confirm password"
                type="password"
                autoComplete="current-password"
                required
              // value={signup.password}
              // onChange={(value) => {
              //   setSignup((prev) => ({
              //     ...prev, password: value.target.value
              //   }))
              // }}

              />
            </div>
          </div>

          <div className='mt-4'>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Confirm 
            </button>
          </div>
          {/* </form> */}


        </div>
      </div>
    </div>
  )
}

export default ResettPassword