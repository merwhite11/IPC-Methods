//listen for incoming connections from clients aka other Node.js process
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle incoming data from client
  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());
    const reply = 'Hello Client!'
    socket.write('Server replies: ' + reply);
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});