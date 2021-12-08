const express = require('express');
const router = express.Router();
const Usuarios = require('../models/usuarios');

router.post('/login', async (req, res) => {
  try{
    const credenciais = req.body;
    const usuario = await Usuarios.findOne(credenciais);
    if (usuario) {
      res.json({ error: false, usuario });
    } else {
      res.json({ error: true, message: 'Nenhum usuario encontrado' });
    }
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;