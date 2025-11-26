import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SECRET_KEY = process.env.JWT_SECRET_KEY

export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    const expitation = { expiresIn: '1h' };
    return jwt.sign(user, SECRET_KEY, expitation);
}

const token = generateToken({id: 1, email: 'test@gmail.com'});
console.log("")
console.log("Token generado:", token);
console.log("")