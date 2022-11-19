const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	console.log(httpRequest.body);

	pool.query(
		`
      SELECT * FROM user_jura
      WHERE user_id = $1 
    `,
		[httpRequest.params.id],
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
