function sayHello() {
  console.log("Hello after 3 seconds!");
  return "Done!";
}

let timeoutId = setTimeout(sayHello, 3000);

console.log("Timer ID:", timeoutId); // Logs something like: Timer ID: 1
clearTimeout(timeoutId); // Cancels the scheduled function
