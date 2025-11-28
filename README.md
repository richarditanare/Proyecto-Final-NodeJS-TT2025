# Proyecto Final NodeJS 2025
API REST de catálogo de productos con autenticación JWT y Firestore.  
📦 Deploy: https://proyecto-final-nodejstt2025.vercel.app/

## 🌟 ¿Qué incluye?
- 🔐 Login JWT (credenciales de prueba incluidas).
- 🛒 CRUD de productos (listar, crear, editar, eliminar).
- ☁️ Persistencia en Firebase Firestore.
- 🧭 Arquitectura por capas (routes, controllers, services, models).
- 🛡️ Middleware de autenticación y manejo básico de errores.
- 🌐 CORS habilitado (localhost:3000 por defecto).

## 🧪 Credenciales de prueba
- email: `test@gmail.com`
- password: `123456`

## ⚙️ Requisitos previos
- Node.js 18+
- Credenciales de Firebase (Firestore)

## 🔑 Variables de entorno (.env)
```
PORT=3000
JWT_SECRET_KEY=tu_clave_jwt
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
```

## 🚀 Instalación y ejecución local
```bash
npm install
npm start
```
Servidor local: http://localhost:3000

## 🔌 Endpoints principales
- POST `/auth/login` (alias: `/api/auth/login`)  
  Body JSON: `{"email":"test@gmail.com","password":"123456"}` → responde `{ "token": "<jwt>" }`

- GET `/api/products`  
  Headers: `Authorization: Bearer <jwt>`

- GET `/api/products/:id`  
  Headers: `Authorization: Bearer <jwt>`

- POST `/api/products/create`  
  Headers: `Authorization: Bearer <jwt>`, `Content-Type: application/json`  
  Body ejemplo:  
  ```json
  { "nombre": "Cafe", "categoria": "infusion", "precio": 3500 }
  ```

- PUT `/api/products/:id`  
  Headers: `Authorization: Bearer <jwt>`, `Content-Type: application/json`

- DELETE `/api/products/:id`  
  Headers: `Authorization: Bearer <jwt>`

## 🧭 Flujo rápido (Postman o similar)
1) Haz login en `/auth/login` con las credenciales de prueba y toma el `token`.  
2) En cada request posterior añade `Authorization: Bearer <token>`.  
3) Crea producto en `/api/products/create`, lista en `/api/products`.  
4) Edita con `PUT /api/products/:id` y elimina con `DELETE /api/products/:id`.  
5) Verifica cambios listando nuevamente.