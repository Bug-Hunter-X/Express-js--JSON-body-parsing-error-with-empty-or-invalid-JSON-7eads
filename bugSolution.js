const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  let data = {};
  try {
    if(req.body) data = JSON.parse(JSON.stringify(req.body));
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return res.status(400).send('Invalid JSON');
  }
  // Process the data here
  console.log(data);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));