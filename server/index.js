/*const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});

/*const publicVapidKey =
  "BP9Ijh4WAziKKbrx30pH0yri9qRnZqn4gThrIauDXCEmKZCy_S-zix4nsSUh88os1YM5Oygj0qXNTUQYG6imQ1o";
const privateVapidKey = "FsTgIOn40i42Dmn0oIkrCVDIYOtz-h7oC-YAZ-j1aCI";

webpush.setVapidDetails(
  "mailto:metns.974@gmail.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Set static path
app.use(express.static(path.join(__dirname, "client")));*/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3000;
let fav = [];

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1><a href='/favoris'>Check out favs</a>");
})

app.get('/favoris', (req, res) => {
    if (fav.includes(req.body.photoId)) {
        fav = fav.filter(item => item !== req.body.photoId)
    } else {
        fav.push(req.body.photoId)
    }
    res.send(fav);
})

app.listen(port)