const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
      UPDATE app.warga
      SET 
        nama = $1,
        foto = $2,
        alamat = $3,
        rt = $4,
        rw = $5
      WHERE id = $6
    `,
		[
			httpRequest.body.nama,
			httpRequest.body.foto,
			httpRequest.body.alamat,
			httpRequest.body.rt,
			httpRequest.body.rw,
			httpRequest.params.id,
		],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			if (dbResponse.rowCount == 1) {
				httpResponse.json(dbResponse.rows[0]);
			} else {
				httpResponse.json({});
			}
		}
	);
};
