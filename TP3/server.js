import express, { json } from "express";
import config from "./config/serverConfig.js";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || config.SERVER_CONFIG.port;

/* 1er ejercicio */
app.get("/", (req, res) => {
  let horario = new Date().getHours();
  console.log("Saludo segun el horario del dia: " + horario);
  if (horario >= 6 && horario <= 12) {
    res.send("Buenos dias!");
  } else if (horario >= 13 && horario <= 19) {
    res.send("Buenas tardes!");
  } else if (horario >= 20 && horario <= 5) {
    res.send("Buenas noches!");
  }
});

/* 2do ejercicio */
app.get("/random", (req, res) => {
  let obj = new Object();
  let numeroAleatorio;
  for (var i = 0; i < 10000; i++) {
    numeroAleatorio = Math.floor(Math.random() * 20 + 1);
    if (!obj.hasOwnProperty(numeroAleatorio)) {
      obj[numeroAleatorio] = 1;
    } else {
      obj[numeroAleatorio]++;
    }
  }
  res.send(obj);
});

/* 3er ejercicio */
app.get("/info", (req, res) => {
  console.log("Inicio el programa");
  (async () => {
    try {
      //Leo un archivo
      let datos = await fs.promises.readFile("package.json", "utf-8");
      console.log("Leer el archivo ok", datos);
      let info = {
        contenidoStr: JSON.stringify(JSON.parse(datos)),
        contenidoObj: JSON.parse(datos),
        size: datos.length,
      };
      console.log(info);

      //Escribo un archivo
      await fs.promises.writeFile("info.txt", JSON.stringify(info, null, 4));
      console.log("Escribo el archivo ok");
    } catch (error) {
      console.log(`Error en operación asincrónica de fs: ${error}`);
    }
  })();
  res.send("En la terminal de node se muestra el objeto info");
});

/* 4arto ejercicio */
app.get("/operaciones", (req, res) => {
  let { num1, num2, operacion } = req.query;
  console.log(num1, num2, operacion);
  res.json({ num1, num2, operacion });

  if (
    operacion == "suma" ||
    operacion == "resta" ||
    operacion == "multiplicacion" ||
    operacion == division
  ) {
    if (operacion == "suma") {
      let resultado = num1 + num2;
      console.log(resultado == isNaN() || resultado == null);
      console.log(resultado);
      res.json({
        info: `Ruta ${method}`,
        URL,
      });
    }
  }

  /*   {
    error: {
      num1: {valor: X, tipo: y },
      num2: {valor: X, tipo: y },
      operacion: {valor: X, tipo: y }
    }
  } */
});

/* Servidor conexion */
app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
