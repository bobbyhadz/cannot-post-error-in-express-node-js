// Cannot POST / error in Express and Node.js

// 👇️ using ES6 Modules import/export syntax
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/register', function (req, res) {
  // 👇️ if your HTML file is in the root directory (next to package.json)
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
  console.log(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );

  res.send(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
