
let app = require("express")();
require("dotenv").config();

/* Data */
let apiData = require("../Data/api.json");

app.listen(process.env.PORT);


app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json' )
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(404) ? res.json('Error') : res.send('Hola')
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

 module.exports = app