import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import menuModels from "./menuModels.js";

const { DataTypes } = Sequelize;

const list_menu = db.define(
	"list_menu",
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
		qty: {
			type: DataTypes.INTEGER,
			required: true,
		},

		harga: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// menu_id: {
		// 	type: DataTypes.STRING,
		// 	references: {
		// 		model: menuModels, // 'Movies' would also work
		// 		key: "uuid",
		// 	},
		// },
	},
	{
		freezeTableName: true,
	}
);

menuModels.hasMany(list_menu);
list_menu.belongsTo(menuModels);

export default list_menu;
