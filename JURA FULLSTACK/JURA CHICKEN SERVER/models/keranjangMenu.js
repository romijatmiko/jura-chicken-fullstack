import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import cart_jura from "./keranjangModels.js";
import menu_jura from "./menuModels.js";

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
		menu_id: {
			type: DataTypes.STRING,
			references: {
				model: menu_jura, // 'Movies' would also work
				key: "uuid",
			},
		},
	},
	{
		freezeTableName: true,
	}
);

keranjangMenu.belongsTo(cart_jura, { foreignKey: "id_keranjang" });

user_jura.hasMany(orderDetailsModels);
orderDetailsModels.belongsTo(user_jura, { foreignKey: "id_user" });
// cart_jura.belongsTo(list_menu); // A BelongsTo B
menu_jura.belongsTo(list_menu); // A BelongsTo B

export default list_menu;
