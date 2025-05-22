const express = require('express');
const app = express();
const port = 8080;
app.get('/', (req, res) => res.send('Hello all welcome to @helix'));
app.listen(port, () => console.log(`App running on port ${port}`));
