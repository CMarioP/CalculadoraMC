// Get form element and attach event listener
const bmiForm = document.getElementById('bmiForm');
bmiForm.addEventListener('submit', calculateBMI);

// BMI calculation function
function calculateBMI(event) {
  event.preventDefault(); // Prevent form submission

  // Get weight and height input values
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

  // Calculate BMI
  const bmi = weight / (height * height);

  // Calculate CM Dosage
  function dosisMC(){
    if(bmi < 25){
        return Math.ceil(weight * 0.8);
    }
    else{
        return Math.ceil(weight);
    }
  } 

  function jamesDosisMC(){
    return Math.ceil((1.10*weight)-128*((weight*weight)/Math.pow(100*height,2)));
  }

  // Display the result
  const result = document.getElementById('result');
  result.innerHTML = `<h5>La dosis de medio de contraste es: ${dosisMC().toFixed(2)} cc </h5>`;
}
