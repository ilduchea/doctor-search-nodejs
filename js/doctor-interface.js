var Doctor = require('./../js/doctor.js').doctorModule;

function displayName(results) {
  var i = 1;

  results.forEach(function(result) {
    var first_name = result.profile.first_name;
    var middle_name = result.profile.middle_name;
    var last_name = result.profile.last_name;
    var title = result.profile.title;
    var img_url = result.profile.image_url;
    console.log(img_url);
    var bio = result.profile.bio;
    var specialties = result.specialties;
    var buisness_name = result.practices[0].name;
    var street = result.practices[0].visit_address.street;
    var city = result.practices[0].visit_address.city;
    var state = result.practices[0].visit_address.state;
    var zip = result.practices[0].visit_address.zip;
    var phones = result.practices[0].phones;

    $('.results').append(`<div class="doc${i}"></div>`);
    $('div').last().append(
      `<h4>${first_name} ${middle_name} ${last_name} ${title}</h4>`+
      '<div class="row details">'+
        '<div class="col-md-3">'+
          `<img src="${img_url}">`+
        '</div>'+
        '<div class="col-md-6">'+
          '<div class="row">'+
            '<h5>Bio</h5>'+
            `<p>${bio}</p>`+
          '</div>'+
          '<div class="row">'+
            '<div class="col-md-4">'+
              '<h5>Specialties</h5>'+
              '<ul class="specialties">'+
              '</ul>'+
            '</div>'+
            '<div class="col-md-4">'+
              '<h5>Address</h5>'+
              `<h5>${buisness_name}</h5>`+
              `<p>${street}</p>`+
              `<p>${city}, ${state} ${zip}</p>`+
            '</div>'+
            '<div class="col-md-4 phones">'+
              '<h5>Contact</h5>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    );

    specialties.forEach(function(specialty) {
      $('ul.specialties').last().append(
        `<li>${specialty.name}</li>`
      );
    });

    phones.forEach(function(phone) {
      $('div.phones').last().append(
        `<p>${phone.type}: ${phone.number}`
      );
    });

    $(`h4.doc${i}`).click(function() {
      $('div.details').last().toggle();
      console.log(first_name);
    });
    i++;
  });
}

function displayResults(results) {
  displayName(results);
}

$(function(){
  var newDoctor = new Doctor();
  $('#search').click(function() {
    var symptom = $('#symptom').val();
    newDoctor.getDoctors(symptom, displayResults);
  });
});
