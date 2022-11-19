const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	pool.query(
		`
      DELETE FROM menu
      WHERE id_menu = $1
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
