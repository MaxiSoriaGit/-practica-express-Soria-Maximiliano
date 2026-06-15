import { Router } from 'express'
import {
  obtenerPersonajes,
  obtenerPersonajePorId,
  agregarPersonaje,
  modificarPersonaje,
  eliminarPersonaje
} from '../controllers/personajes.controllers.js'

const router = Router()

router.get('/', obtenerPersonajes)
router.get('/:id', obtenerPersonajePorId)
router.post('/', agregarPersonaje)
router.put('/:id', modificarPersonaje)
router.delete('/:id', eliminarPersonaje)

export default router