const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }
  try {
    const decoded = jwt.verify(token, 'mynameisearthcallfromuniverse'); // Replace 'your_jwt_secret' with your actual secret
    req.userId = decoded.id; // Assumes the user ID is stored in the token's 'id' field
    next();
  } catch (error) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = auth;