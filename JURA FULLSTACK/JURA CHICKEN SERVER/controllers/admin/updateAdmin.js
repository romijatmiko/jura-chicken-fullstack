const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	const hashedPassword = bcrypt.hashSync(httpRequest.body.password_admin, 8);
	pool.query(
		`
      UPDATE admin_jura
      SET 
        username_admin = $1,
        password_admin = $2,
        email_admin = $3,
        created_on = $4,
        last_login = $5
      WHERE admin_id = $6
    `,
		[
			httpRequest.body.username_admin,
			hashedPassword,
			httpRequest.body.email_admin,
			httpRequest.body.created_on,
			httpRequest.body.last_login,
			httpRequest.params.admin_id,
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
