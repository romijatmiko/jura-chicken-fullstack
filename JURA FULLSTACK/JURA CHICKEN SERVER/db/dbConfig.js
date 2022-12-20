import { Sequelize } from "sequelize";

const db = new Sequelize("jurao", "postgres", "romi", {
	host: "localhost",
	dialect: "postgres",
});

export default db;
