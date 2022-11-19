const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	const hashedPassword = bcrypt.hashSync(httpRequest.body.password_user, 8);
	pool.query(
		`
      UPDATE user_jura
      SET 
        username = $1,
        password_user = $2,
        email_user = $3,
        created_on = $4,
        last_login = $5
      WHERE user_id = $6
    `,
		[
			httpRequest.body.username,
			hashedPassword,
			httpRequest.body.email_user,
			httpRequest.body.created_on,
			httpRequest.body.last_login,
			httpRequest.params.user_id,
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
