import { Sequelize } from "sequelize";
import db from "../db/dbConfig.js";
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
		details: {
			type: Sequelize.ARRAY(Sequelize.STRING),
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		alamatKirim: {
			type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		payment_type: {
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
		response_midtrans: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
	},
	{
		freezeTableName: true,
	}
);

userModels.hasMany(orderDetailsModels);
orderDetailsModels.belongsTo(userModels);

export default orderDetailsModels;
