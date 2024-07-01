// Code your solutions in this file
let names = ["Charlie", "Samip", "Ali"]
let events = []
function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    let message =`Thank you, ${names[i]}, for the wonderful surprise gift!`;
    messages.push(message)
  }
  return messages;
}
 function countDown(number) {
  //Using for loop
  // for (let i = number; i >= 0; i--) {
  //   console.log(i)
  // } 

  //Using While Loop
  while (number >= 0) {
    console.log(number--);
  }
 }
