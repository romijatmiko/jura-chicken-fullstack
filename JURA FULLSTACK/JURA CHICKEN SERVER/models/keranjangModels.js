import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import userModels from "./userModels.js";
import keranjangMenu from "./keranjangMenu.js";
import menu_jura from "./menuModels.js";

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
		// list_menu: {
		// 	type: DataTypes.STRING,
		// 	references: {
		// 		model: keranjangMenu, // 'Movies' would also work
		// 		key: "uuid",
		// 	},
		// },
		// user_id: {
		// 	type: DataTypes.STRING,
		// 	references: {
		// 		model: userModels, // 'Movies' would also work
		// 		key: "uuid",
		// 	},
		// },
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

userModels.hasOne(cart_jura);
// cart_jura.belongsTo(userModels, { foreignKey: "user_id" });
cart_jura.belongsTo(userModels);

menu_jura.hasMany(cart_jura);
// keranjangMenu.belongsTo(cart_jura, { foreignKey: "list_menu" });
cart_jura.belongsTo(keranjangMenu);

export default cart_jura;
