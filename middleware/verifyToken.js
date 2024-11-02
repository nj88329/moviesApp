const admin = require('../assets/firebase')

async function verifyToken(req, res, next){

    const token = req.headers.authorization?.replace('Bearer ', ''); 

    if( !token )
        return res.status(401).send('Unauthorised');

    try{
            const decodeToken = await admin.auth().verifyIdToken(token);
            req.user = decodeToken;
            next();
    }catch(error){
        console.error('Token verification error:', error); 
      return res.status(401).send('Unauthorised');
    }
}

module.exports = { verifyToken };