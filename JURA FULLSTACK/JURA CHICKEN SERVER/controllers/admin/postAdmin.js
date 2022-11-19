const bcrypt = require("bcryptjs");

const pool = require("../../db/dbpool");

module.exports = (httpRequest, httpResponse) => {
	const hashedPassword = bcrypt.hashSync(httpRequest.body.password_admin, 8);

	pool.query(
		`
      INSERT INTO admin_jura(
        username,
        password_admin,
        email_admin,
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
			httpRequest.body.username,
			hashedPassword,
			httpRequest.body.email_admin,
			httpRequest.body.created_on,
			httpRequest.body.last_login,
		],
		(dbError, dbResponse) => {
			if (dbError) throw dbError;

			httpResponse.json(dbResponse.rows[0]);
		}
	);
};
