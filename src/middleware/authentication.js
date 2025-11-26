import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
    const token = req.headers['authorization']?.split(" ")[1];

    if (!token) return res.status(401).json({ message: 'Falta el token de acceso. Inicia sesion para continuar.' });

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.status(403).json({ message: 'Token invalido o expirado. Solicita uno nuevo e intentalo de nuevo.' });
        next();
    });
};
