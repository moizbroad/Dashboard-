import React from 'react'
import InputField from './CustomComponent/InputField'
import Button from './CustomComponent/Button';
import { useState } from 'react'
import axios from 'axios'
import gettokenaccess from '../../Helper/gettokenaccess'
import { useNavigate } from 'react-router'
import toast  from 'react-hot-toast'; 


const loogin = () => {
  const navigate = useNavigate();

  // const [token, setToken]=useState({
  //   refresh:""
  // })
  // login data 
  const [logindata, setLoginData] = useState({
    email: '',
    password: '',
    remember_me: false,
  });

  const handelEnter = (e) => {
    if ( e.key === 'Enter')
    {
      gettoken(e)
    };
  }


  const gettoken = async () => {
    let data = {
      email: logindata.email,
      password: logindata.password,
      remember_me: logindata.remember_me
    }
    // console.log(data, "kkkk")
    axios.post("https://test-backend.budgetlab.io/accounts/login/", data).then((res) => {
      if (res.status === 200) {
        // debugger 
        localStorage.setItem('access', res.data.access);  
        localStorage.setItem('Refreshtoken', res.data.refresh); 
        localStorage.setItem('access', res.data.access);
        // Storing the rememberMe flag in localStorage
         localStorage.setItem('rememberMe', res.data.remember_me); 
        
        // console.log(access, "aaa"
        
      }
      if (gettokenaccess()) {
        navigate('/')
        // Route to Dashboard
      }
      // else {
      //   navigate('/login')
      // }

    })
    
    .catch((err) => {
      console.log(err, "error");
      toast.error(err.response.data.detail)
    });

  

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

          <div className="flex items-center mt-4">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              onKeyDown={handelEnter}
              onChange={(value) => {
                setLoginData((prev) => ({
                  ...prev, remember_me: value.target.value
                }))
              }}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 ">
              Remember me
            </label>
          </div>

          <div className="flex items-center justify-end">

            <div className="text-sm">
              <a  className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={()=>navigate("/forgotpassword")}>
                Forget password ?
              </a>
            </div>
          </div>

          <div className="flex items-center w-full ">

            <div className="text-base">

               <p className=' text-black pt-2'> don't have account then
                <a className='font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer' onClick={()=>navigate("/signup")} > signup   </a>

                 </p>
               
            </div>
          </div>

          <div    >
            <Button
              className="mt-8"
              onClick={gettoken}
              
              >
             Sign in 
            </Button>
          </div>
          {/* </form> */}


        </div>
      </div>
    </>


  )
}

export default loogin