const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Pega o token do cabeçalho da requisição
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) return res.sendStatus(401); // Se não tem token, retorna não autorizado

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token não é válido
    req.user = user;
    next(); // Passa para o próximo middleware ou rota
  });
}

module.exports = authenticateToken;