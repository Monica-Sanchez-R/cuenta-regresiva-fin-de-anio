function alerta() {
    alert("Esta es la cuenta regresiva para fin de año.")
}
alerta();

function setDate() {
/* Dias de la semana */
const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const hoy = new Date();
const diaDeLaSemana = diasDeLaSemana[hoy.getDay()];

/* Dia del mes */
const fechaActual = new Date();
const diaDelMes = fechaActual.getDate();

/* Mes del año */
const mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const mes = new Date();
const mesDelAño = mesesDelAño[hoy.getMonth()];

/* Año actual */
const añoActual = new Date().getFullYear();

/* Hora actual */
const horaActual = new Date().getHours();

/* Minutos */
const minutos = new Date().getMinutes();

/* Segundos */
const segundos = new Date().getSeconds();


document.getElementById("first").innerHTML =

    `
<div class="primero">
    <h1 class="titulo">Hora Actual</h1>
    <p>Hoy es ${diaDeLaSemana} ${diaDelMes} de ${mesDelAño} de ${añoActual}, y son las ${horaActual}
    horas, ${minutos} minutos con ${segundos} segundos.</p>
</div>
`

/* Cuenta regregresiva */

const fechaAñoNuevo = new Date(fechaActual.getFullYear() + 1, 0, 1);

const diferencia = fechaAñoNuevo - fechaActual;

// Convertimos la diferencia en milisegundos a días, horas, minutos y segundos
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos2 = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
const segundos2 = Math.floor((diferencia % (1000 * 60)) / 1000);


const cuentaRegresiva = document.getElementById('second').innerHTML =
    `
<div class="segundo">
    <h2 class="titulo">Cuenta Regresiva Para Año Nuevo</h2>
    <p>Faltan ${dias} días, ${horas} horas, ${minutos2} minutos y ${segundos2} segundos para año nuevo.</p>
</div>
`
}
  
  setInterval(setDate,1000)
  setDate();







