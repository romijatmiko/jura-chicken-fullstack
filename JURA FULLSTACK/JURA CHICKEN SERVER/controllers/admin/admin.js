const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
        SELECT * FROM admin_jura
      `,
		[],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json(dbResponse.rows);
		}
	);
};
