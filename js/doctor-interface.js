var Doctor = require('./../js/doctor.js').doctorModule;

function displayResults(array) {
  array.forEach(function(doctor) {
    $('.results').append(`<p>${doctor.first_name}</p>`);
  });
}

$(function(){
  var newDoctor = new Doctor();
  $('#search').click(function() {
    var symptom = $('#symptom').val();
    newDoctor.getDoctors(symptom, displayResults);
  });
});
