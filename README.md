# Proyecto Final NodeJS 2025

API REST para catalogo de productos con autenticacion JWT y persistencia en Firestore.

## Requisitos previos
- Node.js 18+
- Credenciales de Firebase (Firestore)

## Instalacion
```bash
npm install
```

## Variables de entorno (.env)
```
PORT=3000
JWT_SECRET_KEY=tu_clave_jwt
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

## Credenciales de prueba
- email: test@gmail.com
- password: 123456

## Ejecutar
```bash
npm start
```
Servidor: http://localhost:3000

## Endpoints principales
- POST /auth/login (alias: /api/auth/login)  
  - Body JSON: `{ "email": "test@gmail.com", "password": "123456" }`  
  - Respuesta: `{ "token": "<jwt>" }`

- GET /api/products  
  - Headers: `Authorization: Bearer <jwt>`

- GET /api/products/:id  
  - Headers: `Authorization: Bearer <jwt>`

- POST /api/products/create  
  - Headers: `Authorization: Bearer <jwt>`, `Content-Type: application/json`  
  - Body ejemplo:  
    ```json
    { "nombre": "Cafe", "categoria": "infusion", "precio": 3500 }
    ```

- PUT /api/products/:id  
  - Headers: `Authorization: Bearer <jwt>`, `Content-Type: application/json`

- DELETE /api/products/:id  
  - Headers: `Authorization: Bearer <jwt>`

## Flujo rapido de uso (Postman o similar)
1) Login en `/auth/login` con las credenciales de prueba para obtener el token.  
2) En cada request posterior agrega header `Authorization: Bearer <jwt>`.  
3) Crear producto en `/api/products/create`, luego listar con `/api/products`.  
4) Editar con `/api/products/:id` y eliminar con `/api/products/:id` (DELETE).  
5) Verifica resultados con `/api/products`.

## Notas
- La ruta de login no requiere token; todas las rutas de productos si.  
- CORS esta habilitado para localhost:3000 por defecto.
