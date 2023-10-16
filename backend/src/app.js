
require('dotenv').config();

const URL= process.env.MONGO_URI;

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const createHttpError = require('http-errors')
const bcrypt=require('bcrypt')
const UserModel=require('./model/user')
const UserRouter=require('./router/user')

const port = process.env.PORT
app.use(express.json())

app.use('/api/v1/users',UserRouter);

app.get('/', (req, res,next) => {
  try {
    //res.send('Welcome')
  throw createHttpError(404,'BROKEN')
  } catch (error) {
    next(error)
  }
 // res.send('Hello World! node')
})

app.use((err, req, res, next)=> {
  if(createHttpError.isHttpError(err)){
    res.status(err.status).send({message: err.message})
  }
  else{
    res.status(500).send({message: err.message})
  }
  //error unknown
  res.status(500).send({message: 'Error Unknown'})
})


// Post
// /api/v1/users
// -name
// -email
// -password

// -user/error

app.post('/api/v1/users',async(req,res,next) => {
  console.log(req.body);
const email=req.body.email;
const password=req.body.password
const name=req.body.name

  try {
    if(!email || !password || !name) {   
      throw createHttpError (400,'Missing required parameters')
    }

    const isUserAvailable=await UserModel.findOne({ email:email}).exec();
    if(isUserAvailable) {
      throw createHttpError(400,'User already exists')
    }

    const hashedHttpError=await bcrypt.hash(password,12);

    const user=new UserModel({
      name:name,
      email:email,
      password:password,
      
    })

    const result = await user.save();
    res.status(201).send(result);



  }catch(error) {
    next(error);

  }

})



console.log('MONGO_URL:', process.env.MONGO_URI);

module.exports=app;
  

    
    
