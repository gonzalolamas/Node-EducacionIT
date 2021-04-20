import express from "express";
import config from "./config/serverConfig.js";

const app = express();
const PORT = process.env.PORT || config.SERVER_CONFIG.port;

/* 1er ejercicio */
app.get("/", (req, res) => {
  let horario = new Date().getHours();
  console.log(horario);
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

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
