var express = require('express');
var router = express.Router();

const Anuncio = require('../../models/Anuncio')

/* GET users listing. */
router.get('/', async(req, res, next) => {
  try {
    const nombre=req.query.nombre
    const venta= req.query.venta
    const precio=req.query.precio
    const tag=req.query.tag
    const limit = parseInt(req.query.limit)
    const sort = req.query.sort
    const skip= parseInt(req.query.skip)
    const foto= req.query.foto

    //const anuncios = await Anuncio.find({nombre:nombre})

    const anuncios = await Anuncio.lista(nombre, venta, precio, tag, limit, sort, skip)
    res.json({result: anuncios })
  } catch (error) {
    next(error)
  }

});

module.exports = router;
