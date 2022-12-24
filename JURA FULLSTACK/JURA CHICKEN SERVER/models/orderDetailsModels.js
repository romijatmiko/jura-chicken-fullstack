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
		total_price: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		jumlah_items: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		total_unique_items: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		details: {
			type: Sequelize.ARRAY(Sequelize.STRING),
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
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		dibayarTanggal: {
			type: DataTypes.DATE,
		},
		sudahDikirim: {
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		dikirimTanggal: {
			type: DataTypes.DATE,
		},
		sudahSampai: {
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		sampaiTanggal: {
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
