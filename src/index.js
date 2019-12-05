const express = require('express');
const app = express();
const db = require('./db/queries');
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get('/', db.getAnakMagang);
app.post('/magang', db.createPemagang);
app.post('/pembimbing', db.createPembimbing);
app.get('/pembimbing', db.readAllPembimbing);
app.get('/pembimbing/:id', db.readPembimbing);

// Endpoint list anak magang
// app.get('/', (req, res) => {
//   res.
// });

// Endpoint [POST] request anak magang

// Endpoint [POST] tambah pembimbing

// Endpoint [POST] tambah tempat

// Endpoint [POST] penilian
app.listen(port, () => {
  console.log('Server running at port: ' + port);
});
