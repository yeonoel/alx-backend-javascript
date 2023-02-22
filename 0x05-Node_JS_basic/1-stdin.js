// Print the Welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Read data on stdin
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
