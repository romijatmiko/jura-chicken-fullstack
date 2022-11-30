import { Sequelize } from "sequelize";
import db from "../db/config";
import Users from "./userModels";

const { DataTypes } = Sequelize;

const Menus = db.define(
	"keranjang",
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
		user: {
			type: DataTypes.STRING,
			required: true,
			ref: "User",
		},
	},
	{
		freezeTableName: true,
	}
);

Users.hasMany(Menus);
Products.belongsTo(Users, { foreignKey: "user_id" });

export default Products;
