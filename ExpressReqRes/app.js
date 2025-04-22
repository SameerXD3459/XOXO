const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World! I am Student');
});

app.post('/data', (req, res) => {
  const requestData = req.body;
  console.log(requestData);
  res.json({
    message: 'Data received successfully!',
    data: requestData,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

