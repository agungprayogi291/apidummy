const {User} = require('../db/models');
let user ={};

user.getAll = async(req,res) =>{
    try{
        let result = await User.findAll({
            attributes: ["id","firstName","lastName","email","createdAt","updatedAt"],
        });
        return res.json({
            status:"success",
            data : result
        });
    }catch(error){
        res.status(500).json({
            status:"error", 
            data:error
        });
    }
};
user.create = async (req,res) =>{
    const {firstName,lastName,email} = req.body;
    try{
        let result = await User.create({
            "firstName" : firstName,
            "lastName" : lastName,
            "email" : email
        });
        return res.json({
            status:"success",
            data: result
        });
    }catch(error){
        res.status(500).json({
            status:"error",
            data:error
        })
    }
}

module.exports = user;