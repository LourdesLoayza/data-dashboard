// Declaración de variables generales

var promAqp = data.AQP;
var promLim = data.LIM;
var promScl = data.SCL;
var promCdmx = data.CDMX;

// var sedes = Object.keys(data);
// var promociones = Object.keys(sedes);
  
var prom20162 = '2016-2';
var prom20171 = '2017-1';
var prom20172 = '2017-2';

var ratings = ['ratings'];
var students = ['students'];

function begin() {
  // Declaración de variables filtros select list Overview y Students
  var selectSede = document.getElementById('select-sede');
  var selectProm = document.getElementById('select-prom');
  var selectSprint = document.getElementById('select-sprint');
  var btnOverviewData = document.getElementById('btn-overview-data');
  var btnStudentsData = document.getElementById('btn-students-data');
  
  // Declaración de variables indicadores Overview
  var npsValue = document.getElementById('nps');
  var studentsValue = document.getElementById('students-status');
  var teacherValue = document.getElementById('teacher-rating');
  var jediValue = document.getElementById('jedi-master-rating');

  // Declaración de variables indicadores Students
  var studentsDetailsValue = document.getElementById('students-details');

  var sede;
  var promocion;
 
  // Función selección de sede
  function selectionSede(event) {
    switch (true) {
    case event.target.value === 'AQP':
      sede = Object.keys(data)[0];
      break;
    case event.target.value === 'CDMX':
      sede = Object.keys(data)[1];
      break;
    case event.target.value === 'LIM':
      sede = Object.keys(data)[2];
      break;
    case event.target.value === 'SCL':
      sede = Object.keys(data)[3];
      break;
    }
  }

  // Función selección de promoción
  function selectionProm(event) {
    switch (true) {
    case event.target.value === '20162':
      promocion = prom20162;
      break;
    case event.target.value === '20171':
      promocion = prom20171;
      break;
    case event.target.value === '20172':
      promocion = prom20172;
      break;
    }
  }
  

  // Función mostrar datos overview
  function showOverviewData(selectSede, selectProm) {
    debugger;
    switch (true) {
    case (sede === 'AQP') && (promocion === '2016-2'):
      console.log('Sede AQP Promocion 2016-2');
      break;
    case (sede === 'AQP') && (promocion === '2017-1'):
      console.log('Sede AQP Promocion 2017-1');
      break;
    case (sede === 'CDMX') && (promocion === '2017-1'):
      console.log('Sede CDMX Promocion 2017-1');
      break;
    case (sede === 'CDMX') && (promocion === '2017-2'):
      console.log('Sede CDMX Promocion 2017-2');
      break;
    case (sede === 'LIM') && (promocion === '2016-2'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    case (sede === 'LIM') && (promocion === '2017-1'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    case (sede === 'LIM') && (promocion === '2017-2'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    case (sede === 'SCL') && (promocion === '2016-2'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    case (sede === 'SCL') && (promocion === '2017-1'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    case (sede === 'SCL') && (promocion === '2017-2'):
      console.log('Sede LIM Promocion 2017-2');
      break;
    }

    // Muestra la información de indicadores Overview data
    
    // Los valores de NPS cuentan con sub indicadores
    // Valores información: NPS Promoters
    var dataNpsPromoters = document.createElement('p');
    dataNpsPromoters.textContent = 'Promoters: ' + promAqp[prom20162][ratings][0].nps['promoters'] + '%';
    npsValue.appendChild(dataNpsPromoters);

    // Valores información: NPS Passive
    var dataNpsPassive = document.createElement('p');
    dataNpsPassive.textContent = 'Passive: ' + promAqp[prom20162][ratings][0].nps['passive'] + '%';
    npsValue.appendChild(dataNpsPassive);

    // Valores información: NPS Detractors
    var dataNpsDetractors = document.createElement('p');
    dataNpsDetractors.textContent = 'Detractors: ' + promAqp[prom20162][ratings][0].nps['detractors'] + '%';
    npsValue.appendChild(dataNpsDetractors);

    // Los valores de Student cuentan con sub indicadores
    // Valores información Student Status: No cumple
    var dataStudentsNocumple = document.createElement('p');
    dataStudentsNocumple.textContent = 'No cumple: ' + promAqp[prom20162][ratings][0].student['no-cumple'] + '%';
    studentsValue.appendChild(dataStudentsNocumple);

    // Valores información Student Status: Cumple
    var dataStudentsCumple = document.createElement('p');
    dataStudentsCumple.textContent = 'Cumple: ' + promAqp[prom20162][ratings][0].student['cumple'] + '%';
    studentsValue.appendChild(dataStudentsCumple);

    // Valores información Student Status: Supera
    var dataStudentsSupera = document.createElement('p');
    dataStudentsSupera.textContent = 'Supera: ' + promAqp[prom20162][ratings][0].student['supera'] + '%';
    studentsValue.appendChild(dataStudentsSupera);

    // Valores información ranking teacher
    var dataTeacher = document.createElement('p');
    dataTeacher.textContent = promAqp[prom20162][ratings][0].teacher + '%';
    teacherValue.appendChild(dataTeacher);

    // Valores información ranking jedi
    var dataJedi = document.createElement('p');
    dataJedi.textContent = promAqp[prom20162][ratings][0].jedi + '%';
    jediValue.appendChild(dataJedi);
  }

  // Función mostrar datos students
  function showStudentsData(selectSede, selectProm) {
    // Muestra la información de las estudiantes
     
    // Los valores de estudiantes cuentan con sub indicadores
    // Valores información: Nombre estudiante
    var dataStudentName = document.createElement('p');
    dataStudentName .textContent = 'Nombre: ' + sedeAqp[prom20162][students][0].name;
    studentsDetailsValue.appendChild(dataStudentName);

    // Valores información: Foto estudiante
    var dataStudentPhoto = document.createElement('p');
    dataStudentPhoto.textContent = sedeAqp[prom20162][students][0].photo;
    studentsDetailsValue.appendChild(dataStudentPhoto);

    // Valores información: Estado estudiante
    var dataStudentState = document.createElement('p');
    dataStudentState .textContent = 'Estado: ' + sedeAqp[prom20162][students][0].active;
    studentsDetailsValue.appendChild(dataStudentState);
  }

  
  btnOverviewData.addEventListener('click', showOverviewData);
  btnStudentsData.addEventListener('click', showStudentsData);
  selectSede.addEventListener('change', selectionSede);
  selectProm.addEventListener('change', selectionProm);
};

window.onload = begin;