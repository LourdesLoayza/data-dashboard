// Declaración de variables generales

var sedeAqp = data.AQP;
var sedeLim = data.LIM;
var sedeScl = data.SCL;
var sedeCdmx = data.CDMX;

var sedes = Object.keys(data);
var promociones = Object.keys(sedes);
  
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
 

  // Función selección de sede
  function selectionSede(event) {
    switch (true) {
    case event.target.value === 'LIM':
      sede = sedeLim;
      break;
    case event.target.value === 'AQP':
      console.log(sedeAqp);
      break;
    case event.target.value === 'SCL':
      console.log(sedeScl);
      break;
    case event.target.value === 'CDMX':
      console.log(sedeCdmx);
      break;
    }
  }
    
  // Función selección de promoción
  function selectionProm(event) {
    switch (true) {
    case event.target.value === '':
      console.log('prueba');
      break;
    case event.target.value === '20162':
      console.log(prom20162);
      break;
    case event.target.value === '20171':
      console.log(prom20171);
      break;
    case event.target.value === '20172':
      console.log(prom20172);
      break;
    }
  }
  

  // Función mostrar datos overview
  function showOverviewData(selectSede, selectProm) {
    // Muestra la información de indicadores Overview data
    
    // Los valores de NPS cuentan con sub indicadores
    // Valores información: NPS Promoters
    var dataNpsPromoters = document.createElement('p');
    dataNpsPromoters.textContent = 'Promoters: ' + sedeAqp[prom20162][ratings][0].nps['promoters'] + '%';
    npsValue.appendChild(dataNpsPromoters);

    // Valores información: NPS Passive
    var dataNpsPassive = document.createElement('p');
    dataNpsPassive.textContent = 'Passive: ' + sedeAqp[prom20162][ratings][0].nps['passive'] + '%';
    npsValue.appendChild(dataNpsPassive);

    // Valores información: NPS Detractors
    var dataNpsDetractors = document.createElement('p');
    dataNpsDetractors.textContent = 'Detractors: ' + sedeAqp[prom20162][ratings][0].nps['detractors'] + '%';
    npsValue.appendChild(dataNpsDetractors);

    // Los valores de Student cuentan con sub indicadores
    // Valores información Student Status: No cumple
    var dataStudentsNocumple = document.createElement('p');
    dataStudentsNocumple.textContent = 'No cumple: ' + sedeAqp[prom20162][ratings][0].student['no-cumple'] + '%';
    studentsValue.appendChild(dataStudentsNocumple);

    // Valores información Student Status: Cumple
    var dataStudentsCumple = document.createElement('p');
    dataStudentsCumple.textContent = 'Cumple: ' + sedeAqp[prom20162][ratings][0].student['cumple'] + '%';
    studentsValue.appendChild(dataStudentsCumple);

    // Valores información Student Status: Supera
    var dataStudentsSupera = document.createElement('p');
    dataStudentsSupera.textContent = 'Supera: ' + sedeAqp[prom20162][ratings][0].student['supera'] + '%';
    studentsValue.appendChild(dataStudentsSupera);

    // Valores información ranking teacher
    var dataTeacher = document.createElement('p');
    dataTeacher.textContent = sedeAqp[prom20162][ratings][0].teacher + '%';
    teacherValue.appendChild(dataTeacher);

    // Valores información ranking jedi
    var dataJedi = document.createElement('p');
    dataJedi.textContent = sedeAqp[prom20162][ratings][0].jedi + '%';
    jediValue.appendChild(dataJedi);

    // switch (true) {
    // case (selectSede.target.value === 'LIM') && (selectProm.target.value === '20162'):
    //   console.log('prueba');
    //   break;
    // }
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
  selectSede.addEventListener('change', selectionProm);
  selectProm.addEventListener('change', selectionProm);
};

window.onload = begin;