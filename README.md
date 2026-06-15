# Práctica — API REST con Node.js y Express

Práctica desarrollada para la materia Taller de Lenguajes De Programacion en el Instituto Politécnico Formosa (IPF).

## Descripción

API REST de Personajes desarrollada con Node.js y Express, organizando el código en rutas, controladores y una fuente de datos separada, implementando las operaciones básicas de un CRUD completo.

## Tecnologías utilizadas

- Node.js
- Express
- Nodemon

## Estructura del proyecto

```
practica-express-Soria-Maximiliano/
├── src/
│   ├── controllers/
│   │   └── personajes.controllers.js
│   ├── data/
│   │   └── personajes.js
│   └── routes/
│       └── personajes.routes.js
├── .gitignore
├── app.js
└── package.json
```

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
npm run dev
```

## Endpoints

| Método | Ruta            | Descripción                  |
| ------ | --------------- | ---------------------------- |
| GET    | /personajes     | Obtener todos los personajes |
| GET    | /personajes/:id | Obtener un personaje por ID  |
| POST   | /personajes     | Agregar un personaje         |
| PUT    | /personajes/:id | Modificar un personaje       |
| DELETE | /personajes/:id | Eliminar un personaje        |

## Autor

Soria Maximiliano — IPF
