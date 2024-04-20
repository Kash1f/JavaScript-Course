//Switch-Case with Comparison Oprators

let age = prompt("Please Enter your age:")

switch (true) {
  case (age >= 15 && age <=20):
    alert("You are Eligible");
    break;

  case (age >=21 && age <= 30):
    alert("You are not eligible");
    break;

  default:
    alert("Enter the Valid Age");
}