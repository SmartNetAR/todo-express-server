require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const app = express();
const router = require("../routes.js");
const cors = require("cors");
const port = 5000;

app.use( morgan("dev") );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors());

// middleware de log para todas las rutaas ( reemplazado por morgan )
// app.use( ( req, res, next ) => {
//   console.log( req.method, req.url );
//   if ( true ) {
//     next();
//   }
//   else {
//     return res.sendStatus(401);
//   }
// })

app.use(router);
app.listen(port, function () {
  console.log( "DB_HOST", process.env.DB_HOST );
  console.log( "DB_DATABASE", process.env.DB_DATABASE );
  console.log("Example app listening!");
});
