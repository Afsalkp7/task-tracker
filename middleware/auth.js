const jwt = require("jsonwebtoken");
const secretKey = "authtokenfortaskmanager";


function auth(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    } else {
      try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        console.log(req.userId);
        next();
        
      } catch (error) {
        res.status(401).json({ error: error });

      }
    }
}



module.exports = { auth };