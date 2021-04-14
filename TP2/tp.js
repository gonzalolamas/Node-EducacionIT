/* 
Realizar una función que reciba dos callbacks. El primer callback devuelve el array de objetos que se deben unir luego del tiempo en segundos que indica el retorno del segundo callback. La función devolverá una promesa. Se espera que dicha promesa, devuelva el resultado luego de la cantidad de segundos indicada. En caso de no recibirse un array, se devolverá este mensaje de error: 'Array de entrada no válido'. Si el callback no proporciona un tiempo válido, se devolverá 'Tiempo de entrada no válido' 
*/
const array = () => [
  { a: 1, b: 2 },
  { c: 1, d: 2 },
  { c: 11, b: 22 },
];
const tiempo = () => 2;

function objectMerge(array, tiempo) {
  return new Promise((resolve, reject) => {
    if (typeof tiempo() == "number" && tiempo() > 0 && Array.isArray(array())) {
      return setTimeout(
        () => resolve(Object.assign(...array())),
        tiempo() * 1000
      );
    }
    if (!Array.isArray(array())) {
      let error = "Array de entrada no válido";
      reject(error);
    }
    if (
      typeof tiempo() !== "number" ||
      (typeof tiempo() == "number" && tiempo() <= 0)
    ) {
      let error = "Tiempo de entrada no válido";
      reject(error);
    }
  });
}

objectMerge(array, tiempo)
  .then(() => {
    console.log("result", Object.assign(...array()));
  })
  .catch((error) => console.log("Error en la promesa", error));

/*
La funcion contador debe retornar una funcion que cuando sea invocada retorne un valor creciente.
el primer valor deberia ser 1.
Sugerencia: usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function contador() {
  let count = 0;
  return (counter = () => {
    count++;
    return count;
  });
}

const contadorFunction = contador();
contadorFunction();
contadorFunction();
/*
Usa closures para crear un cache para la funcion cb.
La funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
Cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion.
Cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb deberia retornar el resultado (previamente guardado)

Ejemplo:
cb -> function(x) { return x * x; }
si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache).
Nota: usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
      usá hasOwnProperty!
*/
const cb = (x) => {
  return x * x;
};

function cacheFunction(cb) {
  let obj = new Object();
  return (cache = (x) => {
    console.log("x", x);
    if (x != obj.x) {
      if (!obj.hasOwnProperty("memoria")) {
        !obj.count ? (obj.count = 1) : obj.count++;
        obj.x = x;
        obj.memoria = "EXISTE";
        obj.valor = cb(obj.x);
        console.log(`---RETORNA EL VALOR LLAMANDO AL CALLBACK--- ${obj.valor}`);
        return obj.valor;
      } else {
        obj.x = x;
        obj.valor = cb(obj.x);
        console.log(
          `---LLAMANDO A LA CALLBACK CUANDO HAY OTRO NUMERO EN MEMORIA--- ${obj.valor}`
        );
        return obj.valor;
      }
    }
    console.log(`---RETORNA EL VALOR QUE HAY EN MEMORIA--- ${obj.valor}`);
    return obj.valor;
  });
}
const cachedFunction = cacheFunction(cb);
cachedFunction(5);
cachedFunction(5);
cachedFunction(7);
cachedFunction(7);
cachedFunction(6);
cachedFunction(6);
cachedFunction(6);

module.exports = {
  objectMerge,
  contador,
  cacheFunction,
};
