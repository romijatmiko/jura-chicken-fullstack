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
		const useratt = ["uuid", "nama_user"];
		const attributes = [
			"uuid",
			"total_price",
			"paymentMethod",
			"sudahBayar",
			"dibayarTanggal",
			"sudahDikirim",
			"dikirimTanggal",
		];
		response = await order_details.findAll({
			where: { userJuraUuid: req.params.id },
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
		paymentMethod,
		total_price,
		sudahBayar,
		sudahDikirim,
		id_keranjang,
		cartJuraUuid,
		userJuraUuid,
	} = req.body;
	try {
		await order_details.create({
			uuid: uuid,
			paymentMethod: paymentMethod,
			total_price: total_price,
			sudahBayar: sudahBayar,
			sudahDikirim: sudahDikirim,
			id_keranjang: id_keranjang,
			cartJuraUuid: cartJuraUuid,
			userJuraUuid: userJuraUuid,
		});
		res.status(201).json({ msg: "aikfjwai Created Successfuly" });
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
	const { uuid, qty, id_menu, total_price } = req.body;
	try {
		await menu_jura.update(
			{
				uuid: uuid,
				qty: qty,
				id_menu: id_menu,
				total_price: total_price,
				JuraUuid: req.params.id,
			},
			{
				where: {
					id: update.id,
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
			JuraUuid: req.params.id,
		},
	});
	if (!del) return res.status(404).json({ msg: "Menu tidak ditemukan" });
	try {
		await menu_jura.destroy({
			where: {
				id: del.id,
			},
		});
		res.status(200).json({ msg: "Menu Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
