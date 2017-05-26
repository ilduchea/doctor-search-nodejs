function Test() {
}

Test.prototype.hey = function () {
  let variable = 'with string interpolation.';
  console.log(`buisness logic linked ${variable}`);
};

exports.testModule = Test;
