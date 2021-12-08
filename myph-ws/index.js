const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const usuariosRoutes = require('./src/routes/usuarios.routes');
const loginRoutes = require('./src/routes/login.routes')
const remediosRoutes = require('./src/routes/remedios.routes')

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));


// ROUTES
app.use('/', usuariosRoutes);
app.use('/usuario', loginRoutes);
app.use('/remedios', remediosRoutes);

app.listen(3000, () => {
  console.log('Servidor Funcionando')
});