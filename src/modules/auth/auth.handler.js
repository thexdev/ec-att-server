const db = require('../../database/db');
const hash = require('../hash/hash');

async function login(req, res) {
  const sql = 'select password from users where whatsapp = ?';

  const [rows] = await db.query(sql, [req.body.whatsapp]);

  if (rows.length === 0 || req.body.password === undefined) {
    return res.status(404).json({
      message: 'Pengguna tidak ditemukan!',
    });
  }

  const result = rows[0];

  if (!(await hash.check(result.password, req.body.password))) {
    return res.status(422).json({
      message: 'Nomor WhatsApp dan password tidak cocok!',
    });
  }

  await db.releaseConnection();

  return res.json({ data: req.body });
}

module.exports = { login };
