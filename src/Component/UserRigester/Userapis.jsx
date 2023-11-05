import React from 'react'
import axios from 'axios'

const Userapis = () => {


    const UsersGroup = async () => {
    
        let data = {
         
          
        }
        
        axios.get("https://test-backend.budgetlab.io/company/groups/", data).then((res) => {
          if (res.status === 200) {
    
                // console.log(access, "aaa")
            return true
    
          }
    
        })
    
          .catch((err) => {
            console.log(err, "error");
            return false
            // toast.error(err.response.data.detail)
          });
      }
  return (
    
<> 


</>



  )
}

export default Userapis