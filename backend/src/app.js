require('dotenv').config()


const express = require('express')
const app = express()
const mongoose = require('mongoose');
const createHttpError = require('http-errors')

const port = process.env.PORT

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
  try {
    if(!req.body)

  }catch(error) {

  }

})

  }).then(() => {
    console.log('db connected');
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  }).catch((err) => {
    console.error('Connection error:', err);
  });
  
// mongoose.connect(
//     process.env.MONGO_URL,
//     {}).then(result=>{
//         console.log('db connected')
//     }).catch(err => console.log(err))
    
    
