import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import "./login.css"
const Login = () => {

const [user,setUser]= useState({
  email:"",
  passwordi:""
})

const handlechange= e =>{
  const {name,value}=e.target
  setUser({
  ...user,[name]:value
  })
}
const login=()=>{
  if(user.email===""||user.passwordi==="")
  {
    toast('Enter Email and Password',{
      style:{
        background:'grey'
      }
    });
  }
  else{
    axios.post("http://localhost:9002/login",user)
    .then((res)=>{
      if(res.data.isLoggedIn===true)
      {
        window.location.replace('/home')
        // alert("ok h");
      }
      else if(res.data.isLoggedIn===false){
        toast('Wrong Email or Password',{
          style:{
            background:'grey'
          }
        })
      }
    }
      
    )
  }
 
}

// const login = () => {
//   // Trim the user input to remove leading and trailing spaces
//   const trimmedEmail = user.email.trim();
//   const trimmedPassword = user.password.trim();

//   // Regular expression to validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (trimmedEmail === "" || trimmedPassword === "") {
//     toast('Enter Email and Password', {
//       style: {
//         background: 'grey'
//       }
//     });
//   } else if (!emailRegex.test(trimmedEmail)) {
//     toast('Enter a valid Email', {
//       style: {
//         background: 'grey'
//       }
//     });
//   } else {
//     // Password validation can be added here if needed
//     axios.post("http://localhost:9002/login", user)
//       .then((res) => {
//         if (res.data.isLoggedIn === true) {
//           window.location.replace('/home');
//           // alert("ok h");
//         } else if (res.data.isLoggedIn === false) {
//           toast('Wrong Email or Password', {
//             style: {
//               background: 'grey'
//             }
//           });
//         }
//       });
//   }
// }


  return (
    <>
      <div className="maino">
        <div className="head">
          <h1 className="ms-6">Happy to Help</h1>
          <img className="logo" src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="main">
          <form className="form w-75">
            <h1 className="loghead">Login</h1>
            <div className="mb-3 w-100 mx-auto p-2">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" name="email" value={user.email} onChange={handlechange} className="form-control inpq" placeholder="Enter your Email ID" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3 w-100 mx-auto p-2">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" name="passwordi" className="form-control inpq" value={user.passwordi} onChange={handlechange} placeholder="Enter your Password" id="exampleInputPassword1" required />
            </div>
            <div className="mb-3 mx-auto p-2 sbtn">

              <div className="btn btn-primary sub" onClick={login}>Submit</div>
              <Toaster />
              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;