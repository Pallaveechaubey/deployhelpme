import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

// import { sendMail } from '../sendMailProxy'; // Adjust the path based on the location of sendMailProxy.js
const Home = () => {
    const navigate = useNavigate();
    const [mess, setMess] = useState({
        name: "",
        email: "",
        message: "",
        recipient: ""
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setMess({
            ...mess,
            [name]: value
        });
    };

    const send = () => {
        const { name, email, message, recipient } = mess;
        axios.post("http://localhost:9002/sendm", mess)
            .then(res => {
                console.log(res);// Call sendMail function after successful axios request
                navigate("/finish");
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={mess.name} onChange={handleInputChange} required />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={mess.email} onChange={handleInputChange} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={mess.message} onChange={handleInputChange} required></textarea>
                <label htmlFor="recipient"></label>
                <select className='dropdown' id="recipient" name="recipient" value={mess.recipient} onChange={handleInputChange}>
                    <option value="abhinavchaubey96@gmail.com">Recipient 1</option>
                    <option value="pallavee.x.chaubey@fosteringlinux.com">Recipient 2</option>
                    <option value="pallaveechaubey831@gmail.com">Recipient 3</option>

                    {/* Add more options as needed */}
                </select>
                <input type="submit" value="Send" onClick={send} />
            </form>
        </div>
    );
}

export default Home;
