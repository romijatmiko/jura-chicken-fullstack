import { Sequelize } from "sequelize";
import db from "../db/config";

const { DataTypes } = Sequelize;

const MenuFav = db.define(
	"menu_favorit",
	{
		id_favorit: {
			type: DataTypes.STRING,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
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
		deskripsi: {
			type: DataTypes.INTEGER,
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

export default MenuFav;
