var express = require('express');
var router = express.Router();
const Anuncio = require('../models/Anuncio') 

/* GET home page. */
router.get('/', async(req, res, next) => {
  const anuncios = await Anuncio.find({}).exec()
  res.locals.anuncios=anuncios

  res.render('index', { title: 'Express' });
});

module.exports = router;
