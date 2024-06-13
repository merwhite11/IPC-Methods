const net = require('net');

const client = new net.Socket();
const HOST = 'localhost';
const PORT = 9999;

client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  // Send data to the server
  client.write('Hello, server!');
});

client.on('data', (data) => {
  console.log('Received: ' + data);

  // Close the client after receiving response
  client.destroy();
});

client.on('close', () => {
  console.log('Connection closed');
});

client.on('error', (err) => {
  console.error('Error: ' + err.message);
});