import {Request, Response} from 'express'

let express = require("express");
let app = express();
require("dotenv").config();

/* Data */
let apiData = require("./Data/api.json");

app.listen(process.env.PORT);

const absolutePath = __dirname + '/views/index.html'

app.get('/', (req: Request, res: Response) => {
  res.sendFile(absolutePath)
})

app.get("/api/recetas", (req: Request, res: Response) => {
  res.json(apiData);
  console.log(apiData);
});

app.get("/api/recetas/:nombre", (req: Request, res: Response) => {
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

app.get("/api/recetas/:recetaID"), (req: Request, res:Response) => {
    const { recetaID } = req.params
    const { id } = apiData.receta_01
    console.log(`${recetaID} \n ${id}`)
    return id === 1 && res.json({id: recetaID})
 }

 module.exports = app