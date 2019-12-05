const pool = require('./connect');
const {
  qlCreatePembimbing,
  qlReadAllPembimbing,
  qlReadPembimbing
} = require('./helper');

const values = ['link', 'Quality Checker', 'Customer Care', '8312'];

// 'SELECT id, text(trim(from "text")) FROM todos ORDER BY id ASC',

// const getAnakMagang = (request, response) => {
//   pool.query('SELECT * FROM todos ORDER BY id ASC', (err, res) => {
//     if (err) {
//       console.log(err.stack);
//       response.send('Error');
//     } else {
//       console.log(res.rows);
//       response.send(res.rows);
//     }
//   });
// };

// createRequest

const createPemagang = async (request, response) => {
  try {
    let result = await pool.query(text, values);
    console.log(result);
    response.status(200).send('Success');
  } catch (err) {
    console.log(err);
    response.status(400).send('Error');
  }
};

// Create Pembimbing
const createPembimbing = async (request, response) => {
  const [nama, jabatan, tempat, no_hp] = [
    request.body.nama,
    request.body.jabatan,
    request.body.tempat,
    request.body.no_hp
  ];
  try {
    let result = await pool.query(qlCreatePembimbing, [
      nama,
      jabatan,
      tempat,
      no_hp
    ]);
    console.log(result);
    response.status(200).send('Success');
  } catch (err) {
    console.log(err);
    response.status(400).send(err);
  }
};

// Read All Pembimbing
const readAllPembimbing = async (request, response) => {
  try {
    let result = await pool.query(qlReadAllPembimbing);
    console.log(result);
    response.status(200).send(result.rows);
  } catch (err) {
    console.log(err);
    response.status(400).send(err);
  }
};

// Read one Pembimbing
const readPembimbing = async (request, response) => {
  try {
    let result = await pool.query(qlReadPembimbing, [request.params.id]);
    if (!result.rows[0]) {
      console.log('Halo');
      throw new Error('Data Tidak Ditemukan');
    } else {
      console.log(result.rows[0]);
      response.status(200).send(result.rows[0]);
    }
  } catch (e) {
    response.status(400).send({ error: e.message });
  }
};

module.exports = {
  createPembimbing,
  readAllPembimbing,
  readPembimbing,
  createPemagang
};
