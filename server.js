// Import necessary libraries and modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Create a webhook endpoint
app.post('/webhook', (req, res) => {
  // Handle the incoming webhook data here
  const webhookData = req.body;
  
  // Process the data or trigger any necessary actions
  console.log('Received webhook data:', webhookData);
  
  // Respond to the webhook request
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
