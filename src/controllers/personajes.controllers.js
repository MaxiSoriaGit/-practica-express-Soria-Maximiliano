import { personajes } from '../data/personajes.js'

// GET todos
export const obtenerPersonajes = (req, res) => {
  res.status(200).json(personajes)
}

// GET por ID
export const obtenerPersonajePorId = (req, res) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' })
  }

  const personaje = personajes.find(p => p.id === id)

  if (!personaje) {
    return res.status(404).json({ error: 'Personaje no encontrado' })
  }

  res.status(200).json(personaje)
}

// POST agregar
export const agregarPersonaje = (req, res) => {
  const { nombre, imagen } = req.body

  if (!nombre || !imagen) {
    return res.status(400).json({ error: 'Los campos nombre e imagen son obligatorios' })
  }

  const nuevoId = personajes.length > 0 ? Math.max(...personajes.map(p => p.id)) + 1 : 1
  const nuevo = { id: nuevoId, nombre, imagen }
  personajes.push(nuevo)

  res.status(201).json(nuevo)
}

// PUT modificar
export const modificarPersonaje = (req, res) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' })
  }

  const body = req.body

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({ error: 'El body no puede estar vacío' })
  }

  for (const campo in body) {
    if (body[campo] === '' || body[campo] === null) {
      return res.status(400).json({ error: `El campo "${campo}" no puede estar vacío` })
    }
  }

  const index = personajes.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Personaje no encontrado' })
  }

  personajes[index] = { ...personajes[index], ...body }

  res.status(200).json(personajes[index])
}

// DELETE eliminar
export const eliminarPersonaje = (req, res) => {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).json({ error: 'El ID debe ser un número válido' })
  }

  const index = personajes.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'Personaje no encontrado' })
  }

  personajes.splice(index, 1)

  res.status(200).json({ mensaje: 'Personaje eliminado correctamente' })
}