
require('dotenv').config();

const URL= process.env.MONGO_URI;

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const createHttpError = require('http-errors')
const bcrypt=require('bcrypt')
const UserModel=require('./model/user')
const UserRouter=require('./routes/user')

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

//app.post('/api/v1/users',)



console.log('MONGO_URL:', process.env.MONGO_URI);

module.exports=app;
  

    
    
