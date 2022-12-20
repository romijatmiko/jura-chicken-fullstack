import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import cart_jura from "./keranjangModels.js";
import user_jura from "./userModels.js";

const { DataTypes } = Sequelize;

const orderDetailsModels = db.define(
	"order_details",
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
		id_keranjang: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		total_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		paymentMethod: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		sudahBayar: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		dibayarTanggal: {
			type: DataTypes.DATE,
		},
		sudahDikirim: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		dikirimTanggal: {
			type: DataTypes.DATE,
		},
		id_user: {
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

cart_jura.hasMany(orderDetailsModels);
orderDetailsModels.belongsTo(cart_jura, { foreignKey: "id_keranjang" });

user_jura.hasMany(orderDetailsModels);
orderDetailsModels.belongsTo(user_jura, { foreignKey: "id_user" });

export default orderDetailsModels;
