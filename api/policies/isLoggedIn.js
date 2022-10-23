module.exports = async function(req, res, next) {

  // Valido que exista la cabecera de Authorization
  if (!req.headers || !req.headers.authorization) {
    return res.badRequest({err: 'Authorization header not provided'});
  }

  // Valido que el token sea correcto
  const [bearer, token] = req.headers.authorization.split(' ');
  const decodedToken = AuthService.JWTVerify(token);

  // Verificar que el usuario del token aún exista en la base de datos
  const user = await User.findOne({id: decodedToken.user});
  if (!user) {
    return res.forbidden({err: 'Unauthorized'});
  }
  // Añado a la petición la información del usuario que la realiza
  req.user = user.id;
  next();
};
