import React from 'react'
import InputField from './CustomComponent/InputField'
import { useState } from 'react'
import axios from 'axios'
import gettokenaccess from '../../Helper/gettokenaccess'
import { useNavigate } from 'react-router'



const loogin = () => {
  const navigate =useNavigate();

  // login data 
  const [logindata, setLoginData] = useState({
    email: '',
    password: '',
    remember_me: false,
  });


  const gettoken = async () => {
    let data = {
      email: logindata.email,
      password: logindata.password,
      remember_me: logindata.remember_me
   }
    // console.log(data, "kkkk")
    axios.post("https://test-backend.budgetlab.io/accounts/login/", data).then((res) => {
      console.log(res, 'ooo');
      if(res.status === 200) {
        localStorage.setItem('access', res.data.access);
      }
      if(gettokenaccess()){
        navigate('/')
        // Route to Dashboard
      }
    }).catch((err) => {
      console.log(err, 'eee');
    })
  }
  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

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
                value={logindata.email}
                onChange={(value) => {
                  setLoginData((prev) => ({
                    ...prev, email: value.target.value
                  }))
                }}

              />
            </div>
          </div>

          <div>

            <div className="mt-2">
              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={logindata.password}
                onChange={(value) => {
                  setLoginData((prev) => ({
                    ...prev, password: value.target.value
                  }))
                }}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              onChange={(value) => {
                setLoginData((prev) => ({
                  ...prev, remember_me: value.target.value
                }))
              }}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="flex items-center justify-end">

            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={gettoken}>
              Sign in
            </button>
          </div>
          {/* </form> */}


        </div>
      </div>
    </>


  )
}

export default loogin