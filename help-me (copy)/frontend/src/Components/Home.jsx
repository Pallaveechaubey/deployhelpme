import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"



const Home = () => {

      const [selectedEmail, setSelectedEmail] = useState('');
      const handleSelectEmail = (event) => {
    setSelectedEmail(event.target.value);

  };

  const sendMessage = () => {
    // Replace this with your actual logic to send a message
    alert(`Message sent to: ${selectedEmail}`);
  };

         const navigate= useNavigate();
    const[mess,setmess]=useState({
        name:"",
        email:"",
        message:"",
        sendemail:""
    })
    const handlechange= e=>{
        const {name,value}=e.target
        setmess({
            ...mess,[name]:value
        })
    }
    console.log(mess);
    const send=()=>{
        const {name,email,message,sendemail}=mess
        axios.post("http://localhost:9002/sendm",mess)
        .then(res=>console.log(res))
        navigate("/finish")

        

        }


    

  return (



   

     <div className="container">
        <h1>Contact Us</h1>
        <form className="contact-form" >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={mess.name} onChange={handlechange} required/>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value={mess.email} onChange={handlechange} required/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" value={mess.message} onChange={handlechange} required></textarea>
            <select className='dropdown' value={selectedEmail} onChange={handlechange}>
                {/* <option value="">Select an email</option> */}
                <option value="pallaveechaubey831@gmail.com" name="sendemail">Pallavee</option>
                <option value="amanpanwar17aug@gmail.com" name="sendemail">Aman</option>
                <option value="pallavee.x.chaubey@fosteringlinux.com" name="sendemail">Pallavee2</option>
            </select>
    
            <input type="submit" onClick={send}/>


        </form>
    </div>
  );
}

export default Home;