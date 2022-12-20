import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";

const { DataTypes } = Sequelize;

const coba = db.define(
	"coba",
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		coba: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		freezeTableName: true,
	}
);

export default coba;
