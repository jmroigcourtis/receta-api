let app = require("express")();
let apiData = require("../Data/api.json");
let dbConnect = require('../Database/dbConnection')
let recetaSchema = require('../Database/api_schema');
let bodyParser = require('body-parser')
require("dotenv").config();

/* Data */

app.listen(process.env.PORT);
dbConnect(process.env.MONGO_URI)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())


app.get('*', (req, res) => {
  res.sendFile('index.html', {root: 'public'})
})

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json' )
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(404) 
  ? res.json({
    "message": "Error",
    "status": res.statusCode
  }) 
  : res.send({
    "message": "Succesfull",
    "status": res.statusCode

  })
})

app.get("/api/recetas", (req, res) => {
  res.setHeader('Content-Type', 'application/json' )
  res.json(apiData);
  console.log(apiData);
});

app.get("/api/recetas/:nombre", (req, res) => {
  const { nombre } = req.params;
  if (nombre.includes("papa") || nombre.includes('pure')){
      res.json({apiData});
    } else {
      res.json({
        message: "Error en la busqueda",
      });
    }
  });

app.get("/api/recetas/:recetaID"), (req, res) => {
    const { recetaID } = req.params
    const { id } = apiData.receta_01
    console.log(`${recetaID} \n ${id}`)
    return id === 1 && res.json({id: recetaID})
 }


app.post("/receta", async (req, res) => {
  const { name, ing_1, ing_2, ing_3 } = req.body
  const data = {
    name: name,
    ingredientes: {
      ingrediente_01: ing_1,
      ingrediente_02: ing_2, 
      ingrediente_03: ing_3, 
    }
  }
  try {
    return newData = await new recetaSchema(data).save()
  } catch (error) {
    res.json({
      error: error,
      message:`Error en la petición`
    })
  } finally {
    res.json({newData})
  }
})



 module.exports = app