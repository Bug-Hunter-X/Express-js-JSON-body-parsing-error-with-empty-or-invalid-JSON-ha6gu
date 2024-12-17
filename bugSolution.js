const express = require('express');
const app = express();
app.use(express.json({ limit: '50mb', type: '*/*' })); //Added limit and type to handle different types and sizes
app.post('/user', (req, res) => {
  if (Object.keys(req.body).length === 0) return res.status(400).send('Request body is empty') //Handle empty request
  try {
    console.log(req.body);
    res.send('User created');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});