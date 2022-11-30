import { Sequelize } from "sequelize";
import db from "../db/config";

const { DataTypes } = Sequelize;
const Users_jura = db.define(
	"user_jura",
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
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
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
		password_user: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		created_at: {
			type: DataTypes.TIMESTAMP,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		updated_at: {
			type: DataTypes.TIMESTAMP,
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

export default Users;
