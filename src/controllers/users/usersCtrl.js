const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

User
// Register
const registerUser= expressAsyncHandler(
    async (req,res)=>{
        // res.json({ user: "admin"});
        const { email , firstname , lastname , password } = req?.body;
         // check if user exists
         const userExists = await User.findOne({ email });
         if(userExists) throw new Error("User already exists.");
        try {       
            if(userExists){
                res.json("user_Exist");
                return;
            }
            const user = await User.create({ email, firstname , lastname , password });
            res.status(200).json(user);
            // res.json("success");
        } catch (error) {
            res.json(error);
        }
    });

    //fetch all users
    const fetchUsersCtrl = expressAsyncHandler(async(req,res) => {
        try{
            const users = await User.find({});
            res.json(users);
        }catch(error){
            res.json(error);
        }
    });


module.exports = { registerUser, fetchUsersCtrl };
