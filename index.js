// BMI calculator function
function bmiCalc(weight, height){
    var bmi = Math.round(weight / Math.pow(height,2));
    return bmi;
}
console.log("Your BMI is " + bmiCalc(65, 1.8));