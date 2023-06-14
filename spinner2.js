process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinnerChars = ['|', '/', '-', '\\']; // Array of spinner characters
let delay = 0;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
// Increase the delay by 300 milliseconds for each character
  delay += 300; 
}
// one more timeout to clear the spinner animation after full cycle
setTimeout(() => {
  process.stdout.write('\r   ');
}, delay);
