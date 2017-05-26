var Doctor = require('./../js/doctor.js').doctorModule;

function displayName(doctors) {
  var i = 1;

  doctors.forEach(function(doctor) {
    $('.results').append(`<div class="doc${i}"></div>`);
    $('div').last().append(`<h4 class="doc${i}">${doctor.first_name} ${doctor.last_name} ${doctor.title}</h4>`);
    $(`h4.doc${i}`).click(function() {
      $(`h4.doc${i} + div`).toggle();
    });
    i++;
  });
}

function displayDetails(doctors) {
  var i = 1;

  doctors.forEach(function(doctor) {
    $(`div.doc${i}`).append(
      ``
    );
  });
}

function displayResults(doctors) {
  displayName(doctors);
}

$(function(){
  var newDoctor = new Doctor();
  $('#search').click(function() {
    var symptom = $('#symptom').val();
    newDoctor.getDoctors(symptom, displayResults);
  });
});
