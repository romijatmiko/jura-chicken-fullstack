import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";

const { DataTypes } = Sequelize;

const user_jura = db.define(
	"user_jura",
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
			validate: {
				notEmpty: true,
			},
		},
		nama_user: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [3, 100],
			},
		},
		email_user: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
		no_hp: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
		},
		alamat: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: false,
		},
		kabupaten: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: false,
		},
		kode_pos: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: false,
		},
		password_user: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		role: {
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

export default user_jura;
