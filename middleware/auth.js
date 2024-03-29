const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config();
const secretKey = process.env.authSecretKey;

/**
 * AUTHENTICATION
 */
function auth(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    } else {
      try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
        
      } catch (error) {
        res.status(401).json({ error: error });

      }
    }
}



module.exports = { auth };