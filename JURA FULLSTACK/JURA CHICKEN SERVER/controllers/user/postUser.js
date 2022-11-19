const bcrypt = require("bcryptjs");

const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	const hashedPassword = bcrypt.hashSync(httpRequest.body.passwd, 8);

	pool.query(
		`
      INSERT INTO app.warga(
        nik,
        nama,
        passwd,
        alamat,
        rt,
        rw,
        kode_kelurahan
      )
      VALUES(
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7
      )
    `,
		[
			httpRequest.body.nik,
			httpRequest.body.nama,
			hashedPassword,
			httpRequest.body.alamat,
			httpRequest.body.rt,
			httpRequest.body.rw,
			httpRequest.body.kode_kelurahan,
		],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json(dbResponse.rows[0]);
		}
	);
};
