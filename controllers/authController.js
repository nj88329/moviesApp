const Users = require('../models/usersModel');

  const googleLogin = async(req, res)=>{

        const { uid , email , name, image  } = req.user;
        let user = await Users.findOne({uid});

       if( !user )
       {
         user = new Users({uid , email , name, image});
         await user.save();
     
       }
       res.status(201).json(user);
    }

    module.exports =  googleLogin ;