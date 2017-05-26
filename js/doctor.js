var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
      var doctors = [];
      result.data.forEach(function(doctor) {
        doctors.push(doctor.profile.first_name);
      });
      displayResults(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
