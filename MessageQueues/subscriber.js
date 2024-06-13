const redis = require('redis');
const subscriber = redis.createClient();

subscriber.subscribe('notifications');
subscriber.on('message', (channel, message) => {
  console.log(`Received message from ${channel} channel: ${message}`);
});
