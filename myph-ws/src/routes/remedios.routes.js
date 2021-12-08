const express = require('express');
const router = express();
const Remedio = require('../models/remedio');

// RECUPERAR REMEDIOS
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    let remedios = await Remedio.findById(id);
    res.json({ error: false, remedios });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;