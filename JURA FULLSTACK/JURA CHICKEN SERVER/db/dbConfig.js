import { Sequelize } from "sequelize";

const db = new Sequelize("om", "postgres", "romi", {
	host: "localhost",
	dialect: "postgres",
});

export default db;
