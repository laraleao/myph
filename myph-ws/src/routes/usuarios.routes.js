const express = require('express');
const router = express.Router();
const Usuarios = require('../models/usuarios')

router.get('/', async (req, res) => {
  // RECUPERAR TODOS OS REGISTROS
  try {
    const usuarios = await Usuarios.find({});
    res.json({ error: false, usuarios });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  // RECUPERAR SOMENTE UM REGISTRO
  try {
    const id = req.params.id;
    const usuario = await Usuarios.findById(id);
    res.json({ error: false, usuario });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post('/', async (req, res) => {
  // CRIAR UM REGISTRO
  try {
    const usuarios = req.body;
    const response = await new Usuarios(usuarios).save();
    res.json({ error: false, usuarios: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }  
});

router.put('/:id', async (req, res) => {
  // ATUALIZAR SOMENTE O REGISTRO COM O ID
  try {
    const id = req.params.id;
    const novo_usuario = req.body;
    const usuario = await Usuarios.findByIdAndUpdate(id, novo_usuario);
    res.json({ error: false, usuario });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.delete('/:id', async (req, res) => {
  //DELETAR SOMENTE O REGISTRO COM O ID
  try {
    const id = req.params.id;
    const deleted = await Usuarios.findByIdAndDelete(id);
    res.json({ error: false })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

module.exports = router;