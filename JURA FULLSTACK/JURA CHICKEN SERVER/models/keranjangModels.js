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
		cartItems: [
			{
				qty: { type: DataTypes.INTEGER, required: true },
				id_menu: { type: DataTypes.INTEGER, required: true },
			},
		],
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

cart_jura.hasMany(menu_jura);
menu_jura.belongsTo(cart_jura, { foreignKey: "id_menu" });

user_jura.hasOne(cart_jura); // A HasOne B
cart_jura.belongsTo(user_jura); // A BelongsTo B

export default cart_jura;
