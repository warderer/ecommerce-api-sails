
module.exports = async function(req, res, next) {

  // Valido que exista la cabecera de Authorization
  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({err: 'Authorization header not provided'});
  }

  // Valido que el token sea correcto
  const token = req.headers.authorization;
  const decodedToken = AuthService.JWTVerify(token);

  // Valido que sea usuario con rol de admin
  if (decodedToken.role === 'ADMIN') {
    return next();
  } else {
    return res.forbidden({err: 'User isnt admin'});
  }
};

