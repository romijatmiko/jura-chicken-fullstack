import { Sequelize } from "sequelize";

const db = new Sequelize("jurac", "postgres", "romi", {
	host: "localhost",
	dialect: "postgres",
});

export default db;
