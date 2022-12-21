import cart_jura from "../models/keranjangModels.js";
import { Op } from "sequelize";
import user_jura from "../models/userModels.js";
import menu_jura from "../models/menuModels.js";

export const getKeranjang = async (req, res) => {
	try {
		let response;
		const useratt = ["uuid", "nama_user"];
		const menuatt = ["uuid", "nama_menu", "harga_menu", "img"];
		const attributes = ["uuid", "qty", "total_price"];
		response = await cart_jura.findAll({
			// where: { uuid: req.params.id },
			attributes: attributes,
			include: [
				{ model: user_jura, attributes: useratt },
				{ model: menu_jura, attributes: menuatt },
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
export const getKeranjangId = async (req, res) => {
	try {
		let response;
		const useratt = ["uuid", "nama_user"];
		const menuatt = ["uuid", "nama_menu", "harga_menu", "img"];
		const attributes = ["uuid", "qty", "total_price"];
		response = await cart_jura.findAll({
			// where: { uuid: req.params.id },
			where: {
				userJuraUuid: req.params.id,
			},
			attributes: attributes,
			include: [
				{ model: user_jura, attributes: useratt },
				{ model: menu_jura, attributes: menuatt },
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createKeranjang = async (req, res) => {
	const { uuid, qty, menu_id, total_price } = req.body;
	try {
		await cart_jura.create({
			uuid: uuid,
			qty: qty,
			menu_id: menu_id,
			total_price: total_price,
			menuJuraUuid: menu_id,
			userJuraUuid: req.params.id,
		});
		res.status(201).json({ msg: "menu_jura Created Successfuly" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const updateKeranjang = async (req, res) => {
	const update = await cart_jura.findOne({
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

export const deleteKeranjang = async (req, res) => {
	const del = await cart_jura.findOne({
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
