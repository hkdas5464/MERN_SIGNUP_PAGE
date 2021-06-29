
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async(request,response)=>{

     const saltpass= await bcrypt.genSalt(10)
     const securePassword = await bcrypt.hash(request.body.password, saltpass)
    const signedUpUser=  new signUpTemplateCopy({
        fullname:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword 
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports  = router