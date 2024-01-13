// scuberGreetingForFeet() function
function scuberGreetingForFeet(someValue) {
  // Use if and else if statements to return the correct greeting based on the distance.
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
    return 'No can do.';
  }
  // Return a default message if none of the above conditions are met.
  return 'Thank you for your patronage.';
}

// ternaryCheckCity() function
function ternaryCheckCity(city) {
  // Use a ternary operator to return the correct response based on the desired destination.
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// switchOnCharmFromTip() function
function switchOnCharmFromTip(tip) {
  // Use a switch statement to return a different response based on the generosity of the tip.
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

// Example usage:
console.log(scuberGreetingForFeet(199)); // Output: This one is on me!
console.log(ternaryCheckCity('NYC')); // Output: Ok, sounds good.
console.log(switchOnCharmFromTip('generous')); // Output: Thank you so much.
function scuberGreetingForFeet(){
  // Write your code here!
}

function ternaryCheckCity(){
  // Write your code here!
}

function switchOnCharmFromTip(){
  // Write your code here!
}