function styleError(element, error, textError) {
  if (error) {
    element.classList.add("error");
    textError.innerText = error;
    textError.style.display ='block';
  } else {
    element.classList.remove("error");
    textError.innerText='';
    textError.style.display ='none';
  }
  //  const msgs = element.parentNode.getElementsByClassName('message');
  //  if(msgs.length > 0){
  //    if(error){
  //      msgs.item(0).innerText=error;
  //      msgs.item(0).style.display='block';
  //    }else{
  //      msgs.item(0).innerText='';
  //      msgs.item(0).style.display='none';
  //    }
  //    msgs.item(1).innerText='geronimo';
  //}
}

function validateNombre() {
  const nombre = document.getElementById("nombre");
  const textError = document.getElementById("nombreError");
  let error = "";
  if (!nombre.value) {
    error += "Falta el nombre";
    styleError(nombre, error,textError);
  } else {
    const regexp = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    if (regexp.test(nombre.value)) {
      styleError(nombre,error,textError);
    } else {
      error += "Nombre no valido";
      styleError(nombre,error,textError);
    }
  }
  mostrarValoresTarjeta();
  return error;
}
function validateCardNumber(){
  const numcard = document.getElementById("numcard");
   const textError = document.getElementById("numCardError");
  let error="";
  if(!numcard.value) {
    error ="Falta el número de tarjeta"
    styleError (numcard,error,textError);
  }else{
     const regexp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
     if(regexp.test(numcard.value)) {
      styleError (numcard,error,textError);
     }else{
      error ="Número de tarjeta invalido";
      styleError (numcard, error, textError);
     }
  }
  mostrarValoresTarjeta();
  return error;
}
function validateMes(){
  const mes = document.getElementById("mes");
   const textError = document.getElementById("mesError");
  let error="";
  if(!mes.value) {
    error +="Falta ingresar el mes"
    styleError (mes,error,textError);
  }else{
     const regexp = /^\d{2}$/;
     if(regexp.test(mes.value)) {
      styleError (mes,error,textError);
     }else{
      error +="Mes invalido";
      styleError (mes, error,textError);
     }
  }if(mes.value>12){
    error+="Mes invalido"
     styleError (mes, error,textError);
  }

  return error;
}
function validateAnio(){
  const anio = document.getElementById("anio");
   const textError = document.getElementById("anioError");
  let error="";
  if(!anio.value) {
    error +="Falta ingresar el año"
    styleError (anio,error,textError);
  }else{
     const regexp = /^\d{2}$/;
     if(regexp.test(anio.value)) {
      styleError (anio,error,textError);
     }else{
      error +="Año invalido";
      styleError (anio, error,textError);
     }
  }
  if(anio.value<23 || anio.value>30){
error +="Año invalido";
styleError (anio, error,textError);
  }
  return error;
}
function validateClave(){
  const codigoseguridad = document.getElementById("codigoseguridad");
   const textError = document.getElementById("claveError");
  let error="";
  if(!codigoseguridad.value) {
    error +="Falta ingresar la cleve de seguridad"
    styleError (codigoseguridad,error,textError);
  }else{
     const regexp = /^\d{3}$/;
     if(regexp.test(codigoseguridad.value)) {
      styleError (codigoseguridad,error,textError);
     }else{
      error +="Clave incorrecta";
      styleError (codigoseguridad, error,textError);
     }
  }
  return error;
}

 const validarEntradas = function () {
  let error = "";
  error += validateNombre();//error es la variable que va guardando los eerores de cada validacion para que al final de la funcion validar entradas se arroje un true, si no se encontraron errores.

  const numcard = document.getElementById("numcard");
  const errorNumcard = validateCardNumber(numcard);
  if (errorNumcard === "") {
  } else {
    error += errorNumcard; //error = "' que significa que no hay errores y la funcion validatecardnumber ya evalua y coloco los estilos si encontro errores.
  }
  const mes = document.getElementById("mes");
  const errorMes = validateMes(mes);
  if (errorMes === "") {
  } else {
    error += errorMes; 
  }
   const anio = document.getElementById("anio");
  const errorAnio = validateAnio(anio);
  if (errorAnio === "") {
  } else {
    error += errorAnio; 
  }
  const codigoSeguridad = document.getElementById("codigoseguridad");
  const errorCodigoSeguridad = validateClave(anio);
  if (errorCodigoSeguridad === "") {
  } else {
    error += errorCodigoSeguridad; //error = 'Nombre no es valido Numero no es valido'
  }
  return error === "";
};
const showSuccess = function () {
const mensaje = document.getElementById('mensaje');
// Agregamos un evento de escucha para el envío del formulario
formulario.addEventListener('click', (e) => {
  // Ocultamos el formulario
  formulario.style.display = 'none';
  // Mostramos el mensaje de agradecimiento
  mensaje.style.display = 'block';
});
}
const mostrarValoresTarjeta = function () {
const inputNombre = document.getElementById('nombre');
const inputNumTarjeta = document.getElementById('numcard');
const inputMes = document.getElementById('mes');
const inputAnio = document.getElementById('anio');
const inputClave = document.getElementById('codigoseguridad');
const inputNombreNuevo = document.getElementsByClassName('nombre nuevo');
const inputNumTarjetaNuevo = document.getElementsByClassName('num-tarjeta nuevo');
const inputMesNuevo = document.getElementsByClassName('date nuevo');
const inputClaveNueva = document.getElementsByClassName('clave nuevo');
console.log(inputNumTarjetaNuevo)
inputNombreNuevo.item(0).textContent = inputNombre.value;
inputNumTarjetaNuevo.item(0).textContent = inputNumTarjeta.value;
inputMesNuevo.item(0).textContent= inputMes.value;
inputMesNuevo.item(0).textContent = inputMes.value +"/"+ inputAnio.value;
inputClaveNueva.item(0).textContent = inputClave.value;

}
const onSubmit = function (event) {
  event.preventDefault();
  const isValid = validarEntradas();
  if (isValid ) {
    showSuccess();
    mostrarValoresTarjeta();
  }
};
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", onSubmit);

const inputNombre = document.getElementById("nombre");
inputNombre.addEventListener("keyup", validateNombre);
const inputNumTarjeta = document.getElementById("numcard");
inputNumTarjeta.addEventListener("keyup", validateCardNumber);
const inputMes = document.getElementById("mes");
inputMes.addEventListener("keyup", validateMes);
const inputAnio = document.getElementById("anio");
inputAnio.addEventListener("keyup", validateAnio);
const inputClave = document.getElementById("codigoseguridad");
inputClave.addEventListener("keyup", validateClave);


