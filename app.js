import express from 'express'
import personajesRouter from './src/routes/personajes.routes.js'

const app = express()
const PORT = 3000
// Middleware para parsear JSON
app.use(express.json())

// Rutas
app.use('/personajes', personajesRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})