/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  let t = 0;
  const vocales = ["A", "E", "I", "O", "U"];

  if( typeof texto !== 'string' ){
    t = -1;
  }else {
    const textoArray = texto.toUpperCase().split("");
    for (let i = 0; i < textoArray.length; i++) {
      if (vocales.includes(textoArray[i])) {
        t++;
      }
    }
  }
  return t;
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/gonzalolamas/Node-EducacionIT-tp1.git";
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () =>
  class Texto {
    static contadorInstancias;
    constructor(texto) {
      this.texto = texto;
      !Texto.contadorInstancias
        ? (Texto.contadorInstancias = 1)
        : Texto.contadorInstancias++;
    }
    contadorPalabras(){
      if (typeof this.texto !== 'string'){
        return -1
      } else {
        let palabras = this.texto.split(' ')
        return (this.texto.trim() !=='') ? palabras.length : 0
      } 
    }

    hayNumeros(){
      let textExisting = false
      if (typeof this.texto !== 'string'){
        return -1
      } else {
        let letters = this.texto.trim().split('')
        for(const letter of letters){
          if(isNaN(parseInt(letter)) ) {
            textExisting = false
          }else {
            textExisting = true
          }
        }
      }
      return textExisting
    }
  };

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
