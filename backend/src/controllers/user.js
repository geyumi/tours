const UserModel=require('../model/user')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt')



exports.register=async (req,res,next)=>{
 
      
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
      
      }
