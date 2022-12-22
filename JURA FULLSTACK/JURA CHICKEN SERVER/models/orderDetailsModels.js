import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
import keranjangModels from "./keranjangModels.js";
import userModels from "./userModels.js";

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
		// cart_id: {
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
	},
	{
		freezeTableName: true,
	}
);

keranjangModels.hasOne(orderDetailsModels);
// keranjangMenu.belongsTo(orderDetailsModels, { foreignKey: "cart_id" });
orderDetailsModels.belongsTo(keranjangModels);

userModels.hasMany(orderDetailsModels);
orderDetailsModels.belongsTo(userModels);
// orderDetailsModels.belongsTo(userModels, { foreignKey: "id_user" });

export default orderDetailsModels;
