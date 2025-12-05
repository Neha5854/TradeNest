const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" , success:false});
    }





const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      createdAt
    });



    // const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully",
         success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};



// module.exports.Login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if(!email || !password ){
//       return res.json({message:'All fields are required',success: false})
//     }
//     const user = await User.findOne({ email });
//     if(!user){
//       return res.json({message:'Incorrect password or email',success: false }) 
//     }
//     const auth = await bcrypt.compare(password,user.password)
//     if (!auth) {
//       return res.json({message:'Incorrect password or email',success: false }) 
//     }
//      const token = createSecretToken(user._id);
//      res.cookie("token", token, {
//        withCredentials: true,
//        httpOnly: false,
       
//      });
//      res.status(201).json({ message: "User logged in successfully", 
//         success: true ,
//         user: user.username,
//         token
//     });
//      next()
//   } catch (error) {
//     console.error(error);
//   }
// }
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", { email, password });

    if (!email || !password) {
      console.log("Missing email or password");
      return res.json({ message: 'All fields are required', success: false });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found in DB");
      return res.json({ message: 'Incorrect password or email', success: false });
    }

    console.log("User found:", user);

    const auth = await bcrypt.compare(password, user.password);
    console.log("Password match result:", auth);

    if (!auth) {
      console.log("Password incorrect");
      return res.json({ message: 'Incorrect password or email', success: false });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });

    console.log("Login successful");
    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      user: user.username,
      token
    });
    next();

  } catch (error) {
    console.error("Login error:", error);
  }
};
