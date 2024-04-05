import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  // Pega o token do cabeçalho da solicitação
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato esperado: "Bearer TOKEN"

  if (!token) {
    return res.sendStatus(401); // Se não houver token, retorna "Não autorizado"
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Se o token não for válido, retorna "Proibido"
    }

    console.log(user.userId)

    req.user = user; // Adiciona os dados do usuário à solicitação para uso posterior
    next(); // Passa para o próximo middleware ou controlador
  });
};

export default authenticateToken;