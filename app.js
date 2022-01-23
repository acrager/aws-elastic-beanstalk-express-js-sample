const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Holy Moly, DevOps Tutorial! And now it is automated'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
