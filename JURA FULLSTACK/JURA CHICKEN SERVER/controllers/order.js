import { Op } from "sequelize";
import user_jura from "../models/userModels.js";
import menu_jura from "../models/menuModels.js";
import order_details from "../models/orderDetailsModels.js";

// const midtransClient = require("midtrans-client");
// const { route } = require(".");
// // Create Core API instance
// let coreApi = new midtransClient.CoreApi({
// 	isProduction: false,
// 	serverKey: "ISI_SERVER_KEY",
// 	clientKey: "ISI_CLIENT_KEY",
// });

export const getOrders = async (req, res) => {
	try {
		let response;
		const useratt = ["uuid", "nama_user", "alamat", "kabupaten", "kode_pos"];
		const attributes = [
			"total_price",
			"jumlah_items",
			"total_unique_items",
			"uuid",
			"details",
			"payment_type",
			"sudahBayar",
			"dibayarTanggal",
			"sudahDikirim",
			"dikirimTanggal",
			"response_midtrans",
		];
		response = await order_details.findAll({
			attributes: attributes,
			include: [{ model: user_jura, attributes: useratt }],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createOrders = async (req, res) => {
	const {
		uuid,
		total_price,
		jumlah_items,
		total_unique_items,
		details,
		payment_type,
		sudahBayar,
		dibayarTanggal,
		sudahDikirim,
		dikirimTanggal,
		response_midtrans,
		userJuraUuid,
	} = req.body;
	try {
		await order_details.create({
			uuid: uuid,
			total_price: total_price,
			jumlah_items: jumlah_items,
			total_unique_items: total_unique_items,
			details: details,
			payment_type: payment_type,
			sudahBayar: sudahBayar,
			dibayarTanggal: dibayarTanggal,
			sudahDikirim: sudahDikirim,
			dikirimTanggal: dikirimTanggal,
			response_midtrans: response_midtrans,
			userJuraUuid: userJuraUuid,
		});
		res.status(201).json({ msg: "order Created Successfuly" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const updateOrders = async (req, res) => {
	const update = await order_details.findOne({
		where: {
			JuraUuid: req.params.id,
		},
	});
	if (!update) return res.status(404).json({ msg: "Menu tidak ditemukan" });
	const { uuid, sudahBayar, dibayarTanggal, sudahDikirim, dikirimTanggal } =
		req.body;
	try {
		await menu_jura.update(
			{
				uuid: uuid,
				sudahBayar: sudahBayar,
				dibayarTanggal: dibayarTanggal,
				sudahDikirim: sudahDikirim,
				dikirimTanggal: dikirimTanggal,
			},
			{
				where: {
					JuraUuid: req.params.id,
				},
			}
		);
		res.status(200).json({ msg: "Menu Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteOrders = async (req, res) => {
	const del = await order_details.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!del) return res.status(404).json({ msg: "Menu tidak ditemukan" });
	try {
		await order_details.destroy({
			where: {
				uuid: del.id,
			},
		});
		res.status(200).json({ msg: "Menu Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
