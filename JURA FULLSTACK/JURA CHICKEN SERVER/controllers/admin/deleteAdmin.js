const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
      DELETE FROM admin_jura
      WHERE admin_id = $1
    `,
		[httpRequest.params.user_id],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json({
				deleted: httpRequest.params.id,
			});
		}
	);
};
