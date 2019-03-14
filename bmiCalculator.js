// BMI calculator, creates result as JSON-object
// and displays result on webpage
const OVERWEIGHT_LIMIT = 25;
const UNDERWEIGHT_LIMIT = 18.5;
var heighSquared;
var person = {
  height: -1,
  weight: -1,
  bmi : -1,
  status : "default",
  //asian: false, // WHO have lower BMI thresholds for asians
  calculate : function() {
    var result;
    if (this.bmi > OVERWEIGHT_LIMIT) {
      result = "Overweight";
    } else if (this.bmi < UNDERWEIGHT_LIMIT) {
      result = "Underweight"
    } else {
      result = "Normal weight";
    }
    this.status = result;
  }
};

var pushIt = function() { // function expression
  fetchInput();
  person.calculate();
  printToDocument(person); // here we go
  // debug printing
  console.log(person);
  console.log(JSON.stringify(person));
}

// this is the main program, the rest is asynchronous
var button = document.getElementById("button");
button.onclick = pushIt;


function fetchInput() {
  var heightBox = document.getElementById("heightBox");
  var weightBox = document.getElementById("weightBox");

  person.height = heightBox.value;
  person.height /= 100;
  person.weight = weightBox.value;

  heightSquared = Math.pow(person.height,2);
  person.bmi = person.weight/heightSquared;
}


function printToDocument(person) {
  var bmi = document.getElementById("bmi");
  var status = document.getElementById("status");

  bmi.innerHTML = "<strong>BMI:</strong> " + person.bmi;
  status.innerHTML = "<strong>Status:</strong> " + person.status;
}
