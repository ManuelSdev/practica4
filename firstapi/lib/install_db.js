'use strict'

//Importo modelo
const Anuncio = require('../models/Anuncio') 
const mongooseConnection = require('./connectMongoose')
const fakeData =require('./anuncios')
const prueba = new Anuncio({
    "nombre": "paco",
    "venta": true,
    "precio": 50,
    "foto": "bici.jpg",
    "tags": ["lifestyle", "ddddddddddddddddddddddd"]
})

//const borraTablas =async function 
console.log('hola')
//console.log(mongooseConnection)
/*
mongooseConnection.once('open', async()=>{
    try {

        const encontrados = await Anuncio.find({nombre: 'paco'}).exec()
        console.log(encontrados)
       // res.json()
       
    } catch (error) {
        console.log('Error al iniciar base de datos', error)
    }
  
    //prueba.save()
    //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
    
    
})
*/
async function startDatabase(){
    try {
        //const encontrados = await Anuncio.find({}).exec()
        //console.log(encontrados)
        await Anuncio.deleteMany({})
        await Anuncio.insertMany(fakeData.anuncios)
        await prueba.save()
        const encontrados = await Anuncio.find({}).exec()
       // res.json()
       console.log("ahi va",encontrados)
       
      // console.log(fakeData.anuncios)
      
    } catch (error) {
        console.log('Error al iniciar base de datos', error)
    }
     
    //console.log('+++++++++++++++++++++++++++++++++++++++++++++++++')
}

startDatabase()