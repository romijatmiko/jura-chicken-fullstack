const bcrypt = require("bcryptjs");
const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	const hashedPassword = bcrypt.hashSync(httpRequest.body.password_user, 8);

	pool.query(
		`
      INSERT INTO user_jura(
        username_user,
        password_user,
        email_user,
        created_on,
        last_login,
      )
      VALUES(
        $1,
        $2,
        $3,
        $4,
        $5
      )
    `,
		[
			httpRequest.body.username_user,
			hashedPassword,
			httpRequest.body.email_user,
			httpRequest.body.created_on,
			httpRequest.body.last_login,
		],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json(dbResponse.rows[0]);
		}
	);
};
