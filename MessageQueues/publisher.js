const redis = require('redis');
const publisher = redis.createClient();

publisher.on('error', (err) => {
  console.error('Error:', err);
});
//publish a message to the 'notifications' channel
publisher.on('ready', () => {

  publisher.publish('notifications', 'Hello, subscriber!', () => {
    console.log('Message sent');
    publisher.quit(); // Close the connection after publishing the message
  });
})
