
let express = require("express");
let app = express();
require("dotenv").config();

/* Data */
let apiData = require("../Data/api.json");

app.listen(process.env.PORT || 3000);


app.get('/', (req, res) => {
  res.status(404) ? res.json('Error') : res.send('Hola')
})

app.get("/api/recetas", (req, res) => {
  res.json(apiData);
  console.log(apiData);
});

app.get("/api/recetas/:nombre", (req, res) => {
  const { nombre } = req.params;
  if (nombre.includes("papa") || nombre.includes('pure')){
      res.json({
      });
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

 module.exports = app