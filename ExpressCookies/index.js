const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'JohnDoe', {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
  });
  res.send('Cookie has been set!');
});

app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.send(`Hello, ${username}`);
  } else {
    res.send('No cookie found!');
  }
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie has been cleared!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
