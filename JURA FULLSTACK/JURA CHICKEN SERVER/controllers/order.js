import { Op } from "sequelize";
import user_jura from "../models/userModels.js";
import menu_jura from "../models/menuModels.js";
import order_details from "../models/orderDetailsModels.js";
import midtransClient from "midtrans-client";

// Create Core API instance
let coreApi = new midtransClient.CoreApi({
	isProduction: false,
	serverKey: "SB-Mid-server-a6m3-7jxol7GsVxLcgz4ezNn",
	clientKey: "SB-Mid-client-LgDkBfzfI2Mg-78I",
});

export const getOrders = async (req, res) => {
	order_details
		.findAll()
		.then((order_details) => {
			const useratt = ["uuid", "nama_user", "alamat", "kabupaten", "kode_pos"];
			var order_details = order_details.map((item) => {
				return {
					uuid: item.uuid,
					total_price: item.total_price,
					jumlah_items: item.jumlah_items,
					total_unique_items: item.total_unique_items,
					details: JSON.parse(item.details),
					payment_type: item.payment_type,
					sudahBayar: item.sudahBayar,
					dibayarTanggal: item.dibayarTanggal,
					sudahDikirim: item.sudahDikirim,
					dikirimTanggal: item.dikirimTanggal,
					sudahSampai: item.sudahSampai,
					sampaiTanggal: item.sampaiTanggal,
					userJuraUuid: item.userJuraUuid,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
					response_midtrans: JSON.parse(item.response_midtrans),
				};
			});
			res.json({
				order_details: order_details,
			});
		})
		.catch((err) => {
			res.json({
				status: false,
				data: [],
			});
		});
};

export const getOrderId = async (req, res) => {
	order_details
		.findAll({
			where: {
				uuid: req.params.id,
			},
		})
		.then((order_details) => {
			var order_details = order_details.map((item) => {
				return {
					uuid: item.uuid,
					total_price: item.total_price,
					jumlah_items: item.jumlah_items,
					total_unique_items: item.total_unique_items,
					details: JSON.parse(item.details),
					payment_type: item.payment_type,
					sudahBayar: item.sudahBayar,
					dibayarTanggal: item.dibayarTanggal,
					sudahDikirim: item.sudahDikirim,
					dikirimTanggal: item.dikirimTanggal,
					sudahSampai: item.sudahSampai,
					sampaiTanggal: item.sampaiTanggal,
					userJuraUuid: item.userJuraUuid,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
					response_midtrans: JSON.parse(item.response_midtrans),
				};
			});
			res.json({
				order_details: order_details,
			});
		})
		.catch((err) => {
			res.json({
				status: false,
				data: [],
			});
		});
};

export const getAllOrderId = async (req, res) => {
	order_details
		.findAll({
			where: {
				userJuraUuid: req.params.id,
			},
		})
		.then((order_details) => {
			var order_details = order_details.map((item) => {
				return {
					uuid: item.uuid,
					total_price: item.total_price,
					jumlah_items: item.jumlah_items,
					total_unique_items: item.total_unique_items,
					details: JSON.parse("{item.details}"),
					payment_type: item.payment_type,
					sudahBayar: item.sudahBayar,
					dibayarTanggal: item.dibayarTanggal,
					sudahDikirim: item.sudahDikirim,
					dikirimTanggal: item.dikirimTanggal,
					sudahSampai: item.sudahSampai,
					sampaiTanggal: item.sampaiTanggal,
					userJuraUuid: item.userJuraUuid,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
					response_midtrans: JSON.parse(item.response_midtrans),
				};
			});
			res.json({
				order_details: order_details,
			});
		})
		.catch((err) => {
			res.json({
				status: false,
				data: [],
			});
		});
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
