const jwt = require("jsonwebtoken");
const secretKey = "authtokenfortaskmanager";


function auth(req, res, next) {
    const token = req.headers.authorization;
    console.log("token",token);
    if (!token) {
        console.log("33333333333333333333");
        return res.status(401).json({ message: 'Unauthorized' });
    } else {
      try {
        console.log("22222222222222222222222");
        const decoded = jwt.verify(token, secretKey);
        console.log(decoded);
        req.userId = decoded.userId;
        console.log(req.userId);
        next();
        
      } catch (error) {
        console.log("11111111111111111111111111");
        res.status(401).json({ error: error });

      }
    }
}



module.exports = { auth };