const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
  console.log('Connected to server');
  client.write('Hello, server!');
});

// Handle data received from the server
client.on('data', (data) => {
  console.log('Received from server:', data.toString());
  client.end();
});

// disconnect client
client.on('end', () => {
  console.log('Client disconnected from server');
});
