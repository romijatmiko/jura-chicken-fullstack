const bcrypt = require("bcryptjs");

const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
      INSERT INTO menu(
        nama_menu,
        harga_menu,
        stok,
        created_on,
        updated_on,
        deskripsi,
        img
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
			httpRequest.body.nama_menu,
			httpRequest.body.harga_menu,
			httpRequest.body.stok,
			httpRequest.body.created_on,
			httpRequest.body.updated_on,
			httpRequest.body.deskripsi,
			httpRequest.body.img,
		],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json(dbResponse.rows[0]);
		}
	);
};
