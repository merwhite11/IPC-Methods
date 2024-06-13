//listens for data coming from parent's standin stream
process.stdin.on('data', (data) => {
  console.log(`stdin: Received from parent: ${data}`);
  //writes response to parent's stdout stream
  process.stdout.write('stdout: Hello, parent!\n');
});