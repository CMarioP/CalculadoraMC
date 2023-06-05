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
        return weight * 0.8;
    }
    else{
        return weight;
    }
  } 

  // Display the result
  const result = document.getElementById('result');
  result.innerHTML = `<h5>La dosis de medio de contraste: ${dosisMC().toFixed(2)}</h5>`;
}
