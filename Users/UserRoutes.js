const User= require('./UserSchema');
const crypt=require("bcrypt")

const createUser= async (req,res)=>{
    const { name, email, password } = req.body;
 
    let existingUser;
    try {
        existingUser=await User.findOne({email})
    } catch (error) {
        console.log(error);
    }

    if(existingUser){
        res.send('User exists with email')
    }

    const hashedpass= crypt.hashSync(password,10);
    const user=new User({name,email,password:hashedpass})
        try {
         await user.save();
         res.send(user)
        } catch (error) {
            console.log(error);
        }
    
}



const login= async (req,res)=>{
    const {email,password}=req.body;

    let existingUser;
    try {
        existingUser=await User.findOne({email})
    } catch (error) {
        console.log(error);
    }
    if(!existingUser){ return res.send("Please Sign up first")}

    const isPasswordCorrect=crypt.compareSync(password,existingUser.password);
    if(isPasswordCorrect) return res.send("Logged in Successfully");
    if(!isPasswordCorrect) return res.send("Password incorrect");
    
}

module.exports={
    createUser,
    login
}