import { Sequelize } from "sequelize";
import db from "../db/config";
import Users from "./userModels";

const { DataTypes } = Sequelize;

const Menus = db.define(
	"jura_menu",
	{
		uuid: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		nama_menu: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				len: [3, 100],
			},
		},
		harga_menu: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
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

Users.hasMany(Menus);
Products.belongsTo(Users, { foreignKey: "user_id" });

export default Products;
