// BMI calculator, creates result as JSON-object
// and displays result on webpage
var heighSquared;

var person = {
  height: -1,
  weigth: -1,
  bmi : -1,
  status : "default",
};

person.height = prompt("Please enter your height in centimetres:");
person.height /= 100;
console.log(person.height);
person.weight = prompt("Please enter your weight in kilograms:");
console.log(person.weight);

heightSquared = Math.pow(person.height,2);
person.bmi = person.weight/heightSquared;
console.log(person.bmi);

person.status = makeResult(person.bmi);
console.log("Result: " + person.status);

console.log(person);
console.log(JSON.stringify(person));

function makeResult(bmi) {

  var result;
  if (bmi >= 25) {
    result = "Overweight";
  } else if ( bmi < 18) {
    result = "Underweight"
  } else {
    result = "Normal weight";
  }
  return result;
}

function printToDocument(person) {
  var bmi = document.getElementById("bmi");
  var result = document.getElementById("")

}
