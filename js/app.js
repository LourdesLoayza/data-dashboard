// Declaración de variables generales

var sedes;

var promociones;

var prom20162 = '2016-2';
var prom20171 = '2017-1';
var prom20172 = '2017-2';

var ratings = ['ratings'];
var students = ['students'];

// students
var AQP162 = data.AQP['2016-2'].students ;
var AQP171 = data.AQP['2017-1'].students;
var CDMX171 = data.CDMX['2017-1'].students;
var CDMX172 = data.CDMX['2017-2'].students;
var LIM162 = data.LIM['2016-2'].students;
var LIM171 = data.LIM['2017-1'].students;
var LIM172 = data.LIM['2017-2'].students;
var SCL162 = data.LIM['2016-2'].students;
var SCL171 = data.SCL['2017-1'].students;
var SCL172 = data.SCL['2017-2'].students;

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
    case event.target.value === 'AQP':
      sedes = data['AQP'];
      break;
    case event.target.value === 'CDMX':
      sedes = data['CDMX'];
      break;
    case event.target.value === 'LIM':
      sedes = data['LIM'];
      break;
    case event.target.value === 'SCL':
      sedes = data['SCL'];
      break;
    }
  }

  // Función selección de promoción
  function selectionProm(event) {
    switch (true) {
    case event.target.value === '20162':
      promociones = '2016-2';
      break;
    case event.target.value === '20171':
      promociones = '2017-1';
      break;
    case event.target.value === '20172':
      promociones = '2017-2';
      break;
    }
  }


  // Función mostrar datos overview
  function showOverviewData(selectSede, selectProm) {
    switch (true) {
    case (sedes === data['AQP']) && (promociones === '2016-2'):
      console.log('Sede AQP Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
    case (sedes === data['AQP']) && (promociones === '2017-1'):
      console.log('Sede AQP Promocion 20171');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
    case (sedes === data['CDMX']) && (promociones === '2017-1'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['CDMX']) && (promociones === '2017-2'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['LIM']) && (promociones === '2016-2'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['LIM']) && (promociones === '2017-1'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['LIM']) && (promociones === '2017-2'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['SCL']) && (promociones === '2016-2'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['SCL']) && (promociones === '2017-1'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    case (sedes === data['SCL']) && (promociones === '2017-2'):
      console.log('Sede CDMX Promocion 20162');
      // Muestra la información de indicadores Overview data

      // Los valores de NPS cuentan con sub indicadores
      // Valores información: NPS Promoters
      var dataNpsPromoters = document.createElement('p');
      dataNpsPromoters.textContent = 'Promoters: ' + sedes[promociones][ratings][0].nps['promoters'] + '%';
      npsValue.appendChild(dataNpsPromoters);

      // Valores información: NPS Passive
      var dataNpsPassive = document.createElement('p');
      dataNpsPassive.textContent = 'Passive: ' + sedes[promociones][ratings][0].nps['passive'] + '%';
      npsValue.appendChild(dataNpsPassive);

      // Valores información: NPS Detractors
      var dataNpsDetractors = document.createElement('p');
      dataNpsDetractors.textContent = 'Detractors: ' + sedes[promociones][ratings][0].nps['detractors'] + '%';
      npsValue.appendChild(dataNpsDetractors);

      // Los valores de Student cuentan con sub indicadores
      // Valores información Student Status: No cumple
      var dataStudentsNocumple = document.createElement('p');
      dataStudentsNocumple.textContent = 'No cumple: ' + sedes[promociones][ratings][0].student['no-cumple'] + '%';
      studentsValue.appendChild(dataStudentsNocumple);

      // Valores información Student Status: Cumple
      var dataStudentsCumple = document.createElement('p');
      dataStudentsCumple.textContent = 'Cumple: ' + sedes[promociones][ratings][0].student['cumple'] + '%';
      studentsValue.appendChild(dataStudentsCumple);

      // Valores información Student Status: Supera
      var dataStudentsSupera = document.createElement('p');
      dataStudentsSupera.textContent = 'Supera: ' + sedes[promociones][ratings][0].student['supera'] + '%';
      studentsValue.appendChild(dataStudentsSupera);

      // Valores información ranking teacher
      var dataTeacher = document.createElement('p');
      dataTeacher.textContent = sedes[promociones][ratings][0].teacher + '%';
      teacherValue.appendChild(dataTeacher);

      // Valores información ranking jedi
      var dataJedi = document.createElement('p');
      dataJedi.textContent = sedes[promociones][ratings][0].jedi + '%';
      jediValue.appendChild(dataJedi);
      break;
      break;
    }
  }

  // Función mostrar datos students
  function showStudentsData(selectSede, selectProm) {
    // Muestra la información de las estudiantes

    // Los valores de estudiantes cuentan con sub indicadores
    // Valores información: Nombre estudiante
    var dataStudentName = document.createElement('p');
    var array = data.AQP['2016-2'].students;
    for (var x = 0; x < array.length; x++) {
      var dataStudentName = document.createElement('p');
      dataStudentName .textContent = 'Nombre: ' + (array[x].name);
      studentsDetailsValue.appendChild(dataStudentName);
    }

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


new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008',
      value: 70},
    { year: '2009',
      value: 10 },
    { year: '2010',
      value: 5 },
    { year: '2011',
      value: 5 },
    { year: '2012',
      value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});


new Morris.Donut({
  // ID of the element in which to draw the chart.
  element: 'mychart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008',
      value: 70},
    { year: '2009',
      value: 10 },
    { year: '2010',
      value: 5 },
    { year: '2011',
      value: 5 },
    { year: '2012',
      value: 20 }
  ],
});
window.onload = begin;
