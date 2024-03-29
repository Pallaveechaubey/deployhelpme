const express= require('express');
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const mongoose= require('mongoose');
const User = require('./models/user');
const sendMail = require('./mail');
const Messa = require('./models/messa');

mongoose.connect('mongodb+srv://pallaveechaubey11:XDtlURsAkAcaAQnf@cluster0.l6iuvmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err);
})

app.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user= await User.create({
            name,
            email,
            password
        })
        res.send({message:"admin Created"})
    } catch (e) {
        console.error(e);
    }
})

app.post("/login", async (req, res) => {
  try {
    const { email, passwordi } = req.body;
    const conf = User.findOne({ email: email })
    .then((docs) => {
        if(docs===null){
            res.json({
                isLoggedIn:false
            })
        }
        else{
             checkUser(passwordi, docs.password);
             async function checkUser(password, phash) {

               if (password === phash) {
                 res.json({
                   isLoggedIn: true,
                 });
               } else {
                 res.json({
                   isLoggedIn: false,
                 });
               }
             }
        }
    });
  } catch (error) {
    console.log(error);
  }
});
app.post("/sendm",async(req,res)=>{

        try {
          const { name, email, message, sendemail} = req.body;
          const mess = await Messa.create({
            name,
            email,
            message,
            sendemail
          });
          //  sendMail({ name, email, message,sendemail });
          console.log(mess)
          res.send({ message: "mail Send" });
        } 
        catch (e) {
          console.error(e);
        }

})

app.listen(9002,()=>{
    console.log('you are live at port 9002')
})
