const qlCreatePembimbing =
  'INSERT INTO tb_pembimbing (nama,jabatan,tempat,no_hp) values($1,$2,$3,$4)';

const qlReadAllPembimbing = 'SELECT * FROM tb_pembimbing ORDER BY id ASC';

const qlReadPembimbing = 'SELECT * FROM tb_pembimbing WHERE id = $1';

const qlCreateRuquest = 'INSERT INTO tb_request';

module.exports = { qlCreatePembimbing, qlReadAllPembimbing, qlReadPembimbing };
