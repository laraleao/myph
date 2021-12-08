const mongoose = require('mongoose');

const Usuarios = mongoose.model('Usuario', {
  nome: String,
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

module.exports = Usuarios;