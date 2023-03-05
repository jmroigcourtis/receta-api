import { query_id } from './query.interface';
import {Request, Response} from 'express'

let express = require("express");
let app = express();
require("dotenv").config();

/* Data */
let apiData = require("./Data/api.json");

app.listen(process.env.PORT);
app.get("/recetas", (req: Request, res: Response) => {
  res.json(apiData);
  console.log(apiData);
});

app.get("/recetas/:nombre", (req: Request, res: Response) => {
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

app.get("/recetas/:recetaID"), (req: Request, res:Response) => {
    const { recetaID } = req.params
    const { id } = apiData.receta_01
    console.log(`${recetaID} \n ${id}`)
    return id === 1 && res.json({id: recetaID})
 }

 module.exports = app