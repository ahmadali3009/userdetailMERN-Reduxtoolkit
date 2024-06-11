let user = require("../model/user")

async function createhandler (req , res)
{let result = req.body ;
    if( !result ||
        !result.Name ||
        !result.phone ||
        !result.email)
        {
            return res.status(400).json({mag : "all field must filed"})
        }
    
    let body = await user.create({
        Name : result.Name,
        phone : result.phone,
        email : result.email
    })
    return res.status(201).json({msg : 'success'})
}

async function gethandler(req , res )
{
    let resultnew = await user.find({})
    res.send(resultnew)
}

async function updatehandler(req , res)
{
   let phone = req.params.phone
   let resultt = req.body
   console.log("resultforupdateuser", resultt);

   let request = await user.findOneAndUpdate({phone} , { Name : resultt.Name,
    phone : resultt.phone,
    email : resultt.email })
    res.send(request)
}


module.exports = {createhandler,updatehandler,gethandler}