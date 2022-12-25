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
			type: "TIMESTAMP",
			allowNull: true,
		},
		sudahDikirim: {
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		kirim_kapan: {
			type: "TIMESTAMP",
			allowNull: true,
		},
		sampai: {
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		sampai_tanggal: {
			type: "TIMESTAMP",
			allowNull: true,
		},
		order_complete: {
			type: Sequelize.STRING,
			defaultValue: "false",
		},
		order_complete_tanggal: {
			type: "TIMESTAMP",
			allowNull: true,
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
