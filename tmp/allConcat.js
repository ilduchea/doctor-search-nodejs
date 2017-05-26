var Doctor = require('./../js/doctor.js').doctorModule;

function displayResults(array) {
  $('.results').text(array);
}

$(function(){
  var newDoctor = new Doctor();
  $('h1').click(function() {
    newDoctor.getDoctors('sore throat', displayResults);
  });
});
