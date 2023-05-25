// Dependencies
const app = require('./app');
const connectDB = require('./src/config/db');
const { serverPort } = require('./src/secret');

// Start the server
app.listen(serverPort, async () => {
  console.log(`Server listening on port ${serverPort}`);
  await connectDB();
});
