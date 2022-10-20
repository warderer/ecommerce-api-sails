const jwt = require('jsonwebtoken');

const SECRET = 'VERYSECRETRANDOMSTRING4512233';

// Genero el JWT con expiración
const JWTIssuer = (payload, expiresIn) => {
  return jwt.sign(payload, SECRET, {
    expiresIn
  });
};

// Verifico la validez del Token
const JWTVerify = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = {
  JWTIssuer,
  JWTVerify
};
