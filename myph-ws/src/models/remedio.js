const mongoose = require('mongoose');

const Remedio = mongoose.model('Remedio', {
  nome: String,
  bula: String,
  quantidade: String,
  data: String,
});

module.exports = Remedio;