window.addEventListener("DOMContentLoaded", () => {
  //fecha
  const diaSem = document.querySelector(".diaSemana");
  const dia = document.querySelector(".dia");
  const mes = document.querySelector(".mes");
  const anio = document.querySelector(".anio");

  //hora
  const horas = document.querySelector(".hours");
  const minutos = document.querySelector(".minutes");
  const amPm = document.getElementById("am");
  const segundos = document.getElementById("secunds");

  function currentTime() {
    let fecha = new Date();
    let diaSemana = fecha.getDay();
    let diaDelMes = fecha.getDate();
    let meseDelAnio = fecha.getMonth();
    let anioActual = fecha.getFullYear();
    let horaActual = fecha.getHours();
    let minutosActuales = fecha.getMinutes();
    let ampm;
    let segundosActuales = fecha.getSeconds();

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
        ampm='PM'
    }else{
        amPm='AM'
    }
    if (horaActual===0) {
        horaActual=12;
    }
    horas.textContent=horaActual;
    amPm.textContent=ampm;
    if (minutosActuales<10) {
        minutosActuales='0'+minutosActuales;
    }
    if (segundosActuales<10) {
        segundosActuales='0'+segundosActuales;
    }
    minutos.textContent=minutosActuales;
    segundos.textContent=segundosActuales;

  }
  setInterval(()=>{
      currentTime();

  }), 1000;
});
