// Button ID
document.getElementById('btn').addEventListener('click', calculateBMI);

// Created 3 constants inside a function!
function calculateBMI() {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  //Created 2 constant height & weight!
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters
 
  //No input IF statement!
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid values.';
    resultDiv.style.color = 'darkred';
    resultDiv.style.fontSize = '25px';
    return;
  }

  // Created another 2 constants and gave BMI formula!
  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);

  //IF ELSE statement for knowing the BMI category!
  let category;
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal Weight';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else if (bmi < 35) {
    category = 'Obesity';
  } else {
    category = 'Extreme Obesity';
  }

  //Result 
  resultDiv.innerHTML = 
  `Your BMI is <span> ${bmiRounded}</span>.<br> Category: <span> ${category} </span>`;
  resultDiv.style.color = '#000';
  const resultSpan = resultDiv.querySelectorAll('span');
  resultSpan.forEach((item) => {

    //IF ELSE statement for showing the result according the values given!
    if (bmi < 18.5) {
        item.style.color = 'blue';
        item.style.fontSize = '25px';
      } else if (bmi < 25) {
        item.style.color = 'green';
        item.style.fontSize = '25px';
      } else if (bmi < 30) {
        item.style.color = 'darkgoldenrod';
        item.style.fontSize = '25px';
      } else if (bmi < 35) {
        item.style.color = 'orange';
        item.style.fontSize = '25px';
      } else {
        item.style.color = 'red';
        item.style.fontSize = '25px';
      }

  })
}