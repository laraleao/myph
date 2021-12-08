const database = require('../services/database');
const Remedio = require('../models/remedio');
const remediosJSON = require('../data/remedio.json');

const addRemedio = async () => {
  try {
    for (let remedio of remediosJSON) {
      console.log(`Inserindo ${remedio.nome}`)
      await new Remedio(remedio).save();
    }
    console.log('Final do Script')
  } catch (err) {
    console.log(err.message)
  }
};

addRemedio();