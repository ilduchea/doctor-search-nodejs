var Test = require('./../js/doctor.js').testModule;
$(function(){
  var newTest = new Test();
  $('h1').click(function() {
    console.log('User Interface working.');
    newTest.hey();
  });
});
