// This file contains the JS functions for index.html

'use strict';
/**
 * This function displays all the numbers from the user's inputted min and max
 */
function displayNumbers() {

  // Variables (Gets Max and Min)
  let minimum = parseInt(document.getElementById("minimum").value);
  let maximum = parseInt(document.getElementById("maximum").value);

  // Initializes Variables
  let counter = minimum;
  let numberDisplay = "";
  let outputHeader = "";

  // Ensures that user inputted minimum and maximum
  if ((minimum >= 0) || (minimum < 0) && (maximum >= 0) || (maximum < 0)) {
    // IF minimum is less than the max
    if (minimum <= maximum) {
      while ((counter >= minimum) && (counter <= maximum)) {
        numberDisplay = numberDisplay + counter + "<br>";
        counter++;
      }
      outputHeader = "All the numbers from " + minimum + " to " + maximum;
      // Error message IF the minimum is higher than the maximum
    } else {
      numberDisplay = "Please enter a minimum smaller than the maximum."
    }
    // IF the user did not give a number for the minimum and maximum
  } else {
    numberDisplay = "Please fill in a valid number for BOTH the minimum and maximum."
  }
    
  // Displays numbers from minimum to maximum (Or possible an error message)
  document.getElementById("output-header").innerHTML = outputHeader;
  document.getElementById("output").innerHTML = numberDisplay;
}