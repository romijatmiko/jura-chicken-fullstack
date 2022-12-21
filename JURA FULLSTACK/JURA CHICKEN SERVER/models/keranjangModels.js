import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import menu_jura from "./menuModels.js";
import user_jura from "./userModels.js";

const { DataTypes } = Sequelize;

const cart_jura = db.define(
	"cart_jura",
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
		menu_id: {
			type: DataTypes.STRING,
			references: {
				model: menu_jura, // 'Movies' would also work
				key: "uuid",
			},
		},
		user_id: {
			type: DataTypes.STRING,
			references: {
				model: user_jura, // 'Movies' would also work
				key: "uuid",
			},
		},
		total_price: {
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

cart_jura.belongsTo(user_jura); // A BelongsTo B
menu_jura.belongsTo(cart_jura); // A BelongsTo B
cart_jura.belongsTo(menu_jura); // A BelongsTo B

export default cart_jura;
