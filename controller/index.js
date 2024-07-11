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
    email : resultt.email },{ new: true } );
    res.send(request)
}

async function deletehandler(req, res) {
    try {
        const phone = req.params.phone;
        const response = await user.findOneAndDelete({ phone });
        if (!response) {
            return res.status(404).send({ message: "User not found" });
        }
        console.log('delete====', response);
        res.send(response);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}



module.exports = {createhandler,updatehandler,gethandler,deletehandler}