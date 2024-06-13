//anonymous pips automatically created when child process spawned
const { spawn } = require('child_process');

//this will run child.js script in a new Node.js process
const child = spawn('node', ['child.js']);

//event handler listens for data coming from child's stdout stream
//data comes in as a Buffer object, needs to be stringified
child.stdout.on('data', (data) => {
  console.log(`stdout: Received from child: ${data}`);
});

//writes a message to child's stdin stream
child.stdin.write('stdin: Hello, child!\n');