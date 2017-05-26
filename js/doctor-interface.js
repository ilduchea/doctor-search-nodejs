var Doctor = require('./../js/doctor.js').doctorModule;

function displayName(results) {
  var i = 1;

  results.forEach(function(result) {
    var first_name = result.profile.first_name;
    var middle_name = result.profile.middle_name;
    var last_name = result.profile.last_name;
    var title = result.profile.title;
    var img_url = result.profile.image_url;
    var bio = result.profile.bio;
    var specialties = result.specialties;
    var buisness_name = result.practices[0].name;
    var street = result.practices[0].visit_address.street;
    var city = result.practices[0].visit_address.city;
    var state = result.practices[0].visit_address.state;
    var zip = result.practices[0].visit_address.zip;
    var phones = result.practices[0].phones;

    $('.results').append(`<div></div>`);
    $('div').last().append(
      `<h2>${first_name} ${middle_name} ${last_name} ${title}</h2>`+
      `<div class="row doc${i} details">`+
        '<div class="col-md-3">'+
          `<img src="${img_url}">`+
        '</div>'+
        '<div class="col-md-6">'+
          '<div class="row">'+
            '<h3>Bio</h3>'+
            `<p>${bio}</p>`+
          '</div>'+
          '<div class="row">'+
            '<div class="col-md-4">'+
              '<h3>Specialties</h3>'+
              '<ul class="specialties">'+
              '</ul>'+
            '</div>'+
            '<div class="col-md-4">'+
              '<h3>Address</h3>'+
              `<h4>${buisness_name}</h4>`+
              `<p>${street}</p>`+
              `<p>${city}, ${state} ${zip}</p>`+
            '</div>'+
            '<div class="col-md-4 phones">'+
              '<h3>Contact</h3>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<hr>'
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

    // $(`h4`).last().click(function() {
    //   $(`.details`).removeClass('details');
    //   console.log(first_name);
    // });
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
