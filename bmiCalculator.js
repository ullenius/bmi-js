// BMI calculator, creates result as JSON-object
// and displays result on webpage
var heighSquared;

var person = {
  height: -1,
  weight: -1,
  bmi : -1,
  status : "default",
  asian: false, // WHO have lower a lower BMI threshold for asians
  calculate : function() {
    var result;
    if (this.bmi >= 25) {
      result = "Overweight";
    } else if ( this.bmi < 18) {
      result = "Underweight"
    } else {
      result = "Normal weight";
    }
    this.status = result;
  }
};

person.height = prompt("Please enter your height in centimetres:");
person.height /= 100;
console.log(person.height);
person.weight = prompt("Please enter your weight in kilograms:");
console.log(person.weight);

heightSquared = Math.pow(person.height,2);
person.bmi = person.weight/heightSquared;
console.log(person.bmi);

person.calculate();
console.log("Result: " + person.status);
console.log(person);
console.log(JSON.stringify(person));

printToDocument(person); // here we go

function printToDocument(person) {
  var bmi = document.getElementById("bmi");
  var status = document.getElementById("status");

  bmi.innerHTML = "<strong>BMI:</strong> " + person.bmi;
  status.innerHTML = "<strong>Status:</strong> " + person.status;
}
