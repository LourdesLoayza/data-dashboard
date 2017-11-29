/*
 * Funcionalidad de tu producto
 * Puedes hacer uso de la base de datos a través de la variable `data`
 * console.log(data);
 */


function begin() {
  var selectSede = document.getElementById('select-sede');
  var selectProm = document.getElementById('select-prom');
  var selectSprint = document.getElementById('select-sprint');
  var btnShowData = document.getElementById('btn-show-data');

  var SEDEAQP = data.AQP;
  var SEDELIM = data.LIM;
  var SEDESCL = data.SCL;
  var SEDECDMX = data.CDMX;
    
  var PROM20162 = '2016-2';
  var PROM20171 = '2017-1';
  var PROM20172 = '2017-2';
    
  function selectionSede(event) {
    switch (true) {
    case event.target.value === '':
      console.log('prueba');
      break;
    case event.target.value === 'LIM':
      console.log(SEDELIM);
      break;
    case event.target.value === 'AQP':
      console.log(SEDEAQP);
      break;
    case event.target.value === 'SCL':
      console.log(SEDESCL);
      break;
    case event.target.value === 'CDMX':
      console.log(SEDECDMX);
      break;
    }
  }
    
  function selectionProm(event) {
    switch (true) {
    case event.target.value === '':
      console.log('prueba');
      break;
    case event.target.value === '20162':
      console.log(PROM20162);
      break;
    case event.target.value === '20171':
      console.log(PROM20171);
      break;
    case event.target.value === '20172':
      console.log(PROM20172);
      break;
    }
  }

  function showData(selectSede, selectProm) {
    debugger;
    switch (true) {
    case (selectSede.target.value === 'LIM') && (selectProm.target.value === '20162'):
      console.log('prueba');
      break;
    }
  }

  btnShowData.addEventListener('click', showData);
  selectSede.addEventListener('change', selectionSede);
  selectProm.addEventListener('change', selectionProm);
};

window.onload = begin;