
const rangeInput = document.getElementById("temas");
const body = document.getElementsByTagName("body")[0];
const controles = document.getElementsByTagName("control");

temas.addEventListener("click", function() {
  const value = parseInt(this.value);
  body.className = `tema${value}`;
  console.log(this.value)
});
//------------------------------------------------------------------------------------------------------------------------------------------------------
let texto = "";
let num1 = "";
let num2 = "";
let operador ="";
let resultado ="";
const operadores = document.getElementsByClassName("operador");
for (let i = 0; i < operadores.length; i++) {
  operadores[i].addEventListener("click", function() {
    aplicarOperador(texto, this.value);
  })
}
const numeros = document.getElementsByClassName("num");
for (let i = 0; i < numeros.length; i++) {
  numeros[i].addEventListener("click", function() {
    if(  ["+","-","*","/"].includes(texto)){
      texto ="";
    }
    if(resultado){
      texto = "";
    }
    valorBoton = this.value;
    texto += valorBoton;
    print();
  })
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
 function onclickAgregarPunto(){
  let caracter = ".";
    if (texto.indexOf(caracter) === -1) {
      texto += caracter;
      print();
    }
  }
  let botonPunto = document.getElementById("teclaPunto");
  botonPunto.addEventListener("click", onclickAgregarPunto);

function aplicarOperador (numero, newOperador) {
  if(texto){
    num1=Number(numero);
  }else{
    num2=Number(numero);
  }
  texto=newOperador;
  operador = newOperador;
  print();
}
//-------------------------------------------------------------------------------------------------------------------------------------------
const resetearPantalla =()=>{
  const control =document.getElementById("RESET");
  control.addEventListener("click", () => {
  texto = "";
  resultado="";
  print();
  });
} 
//-----------------------------------------------------------------------------------------------------------------------------------------------
function  onClickEliminarDigito(){
if (texto) {
    var nuevoTexto = "";
    for (var i = 0; i < texto.length - 1; i++) {
      nuevoTexto += texto[i];
    }
    texto = nuevoTexto;
    print();
  }
}
const control = document.getElementById("EliminarUltDigito");
control.addEventListener("click", onClickEliminarDigito);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
function onclickRealizarOperacion () {
    if (operador === "+") {
      if (num1) {
        num2 = Number(texto);
         resultado = num1 + num2;
      }
    } else if (operador === "-") {
      if (num1) {
        num2 = Number(texto);
         resultado = num1 - num2;
        
      }
    } else if (operador === "/") {
      if (num1) {
        num2 = Number (texto);
        resultado = num1 / num2;
        
      }
    } else if (operador === "*") {
      if (num1) {
        num2 = Number (texto)
        resultado = num1 * num2;
        
      }
    }
    texto = resultado;
    console.log(num1,operador, num2,resultado,texto);
    print();
    }

const control2 = document.getElementById("IGUAL");
control2.addEventListener("click", onclickRealizarOperacion) 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function print(){
  document.querySelector(".salida").textContent = texto; 
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
resetearPantalla();
 
