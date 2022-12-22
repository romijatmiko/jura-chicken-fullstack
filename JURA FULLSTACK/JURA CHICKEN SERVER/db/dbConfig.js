import { Sequelize } from "sequelize";

const db = new Sequelize("g", "postgres", "romi", {
	host: "localhost",
	dialect: "postgres",
});

export default db;
