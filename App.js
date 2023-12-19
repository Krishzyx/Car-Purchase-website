const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'car_purchase',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/home');
  } else {
    res.sendFile(__dirname + '/public/index.html');
  }
});

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send('Welcome, ' + req.session.username + '!');
  } else {
    res.redirect('/');
  }
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/home');
      } else {
        res.send('Incorrect username or password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter username and password!');
    res.end();
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
