const db = require('../../database/db');
const dayjs = require('dayjs');

async function submit(req, res) {
  const sql =
    'update attendances set tapping_date = ?, tapping_time = ? where user_id = (select id from users where rfid = ?) and tapping_date is null and tapping_time is null';

  const [rows] = await db.execute(sql, [
    dayjs().format('YYYY-MM-DD'),
    dayjs().format('HH:mm'),
    req.body.rfid,
  ]);

  await db.releaseConnection();

  if (rows.affectedRows === 0) {
    return res.status(422).json({
      message: 'Anda sudah melakukan presensi!',
    });
  }

  return res.json({ messsage: 'Anda berhasil melakukan presensi!' });
}

module.exports = { submit };
