import menu_jura from "../models/menuModels.js";
import { Op } from "sequelize";

export const getMenu = async (req, res) => {
	try {
		let response;
		response = await menu_jura.findAll({
			attributes: [
				"uuid",
				"nama_menu",
				"img",
				"deskripsi",
				"stok",
				"createdAt",
				"updatedAt",
				"harga_menu",
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getMenutById = async (req, res) => {
	try {
		const response = await menu_jura.findOne({
			attributes: [
				"uuid",
				"nama_menu",
				"img",
				"deskripsi",
				"stok",
				"createdAt",
				"updatedAt",
				"harga_menu",
			],
			where: {
				uuid: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createMenu = async (req, res) => {
	const { nama_menu, img, deskripsi, stok, harga_menu } = req.body;
	try {
		await menu_jura.create({
			nama_menu: nama_menu,
			img: img,
			deskripsi: deskripsi,
			stok: stok,
			harga_menu: harga_menu,
		});
		res.status(201).json({ msg: "menu_jura Created Successfuly" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const updateMenu = async (req, res) => {
	const update = await menu_jura.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!update) return res.status(404).json({ msg: "Menu tidak ditemukan" });
	const { nama_menu, img, deskripsi, stok, harga_menu } = req.body;
	try {
		await menu_jura.update(
			{
				nama_menu: nama_menu,
				img: img,
				deskripsi: deskripsi,
				stok: stok,
				harga_menu: harga_menu,
			},
			{
				where: {
					uuid: req.params.id,
				},
			}
		);
		res.status(200).json({ msg: "Menu Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteMenu = async (req, res) => {
	const del = await menu_jura.findOne({
		where: {
			uuid: req.params.id,
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
