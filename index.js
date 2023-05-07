window.addEventListener("DOMContentLoaded", () => {
  //fecha
  let diaSem = document.querySelector(".diaSemana");
  let dia = document.querySelector(".dia");
  let mes = document.querySelector(".mes");
  let anio = document.querySelector(".anio");

  //hora
  let horas = document.querySelector(".hours");
  let minutos = document.querySelector(".minutes");
  let pAMPM = document.getElementById("am");
  let segundos = document.getElementById("secunds");

  function currentTime() {
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    let diaDelMes = fecha.getDate();
    let meseDelAnio = fecha.getMonth();
    let anioActual = fecha.getFullYear();
    let horaActual = fecha.getHours();
    let minutosActuales = fecha.getMinutes();
    let segundosActuales = fecha.getSeconds();
    let ampm;

    //fecha.
    let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    diaSem.textContent = dias[diaSemana];
    dia.textContent=diaDelMes;
    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio","Agosto","Septiembre","Octubre","Novienbre","Diciembre"];
    mes.textContent=meses[meseDelAnio];
    anio.textContent=anioActual;

    //hora
    if (horaActual>=12) {
        horaActual=horaActual-12;
        ampm="PM";
    }else{
        ampm="AM";
    }
    if (horaActual==0) {
        horaActual=12;
    }
    horas.textContent=horaActual;
    pAMPM.textContent=ampm;
    if (minutosActuales<10) {
        minutosActuales="0"+minutosActuales;
    }
    if (segundosActuales<10) {
        segundosActuales="0"+segundosActuales;
    }
    minutos.textContent=minutosActuales;
    segundos.textContent=segundosActuales;

  }
  setInterval(()=>{
      currentTime();

  }),1000;
});
