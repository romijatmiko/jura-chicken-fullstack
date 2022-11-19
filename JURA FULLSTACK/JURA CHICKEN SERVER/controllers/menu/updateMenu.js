const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
      UPDATE menu
      SET 
        nama_menu = $1,
        harga_menu = $2,
        stok = $3,
        created_on = $4,
        updated_on = $5,
        deskripsi = $6
      WHERE id_menu = $7
    `,
		[
			httpRequest.body.nama_menu,
			httpRequest.body.harga_menu,
			httpRequest.body.stok,
			httpRequest.body.created_on,
			httpRequest.body.updated_on,
			httpRequest.body.deskripsi,
			httpRequest.params.id_menu,
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
