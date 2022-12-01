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
	try {
		const menu_jura = await menu_jura.findOne({
			where: {
				uuid: req.params.id,
			},
		});
		if (!menu_jura)
			return res.status(404).json({ msg: "Data tidak ditemukan" });
		const {
			nama_menu,
			img,
			deskripsi,
			stok,
			created_at,
			updated_at,
			harga_menu,
		} = req.body;
		if (req.role === "admin") {
			await menu_jura.update(
				{ nama_menu, img, deskripsi, stok, created_at, updated_at, harga_menu },
				{
					where: {
						id: menu_jura.id,
					},
				}
			);
		} else {
			if (req.userId !== menu_jura.userId)
				return res.status(403).json({ msg: "Akses terlarang" });
			await menu_jura.update(
				{ name, price },
				{
					where: {
						[Op.and]: [{ id: menu_jura.id }, { userId: req.userId }],
					},
				}
			);
		}
		res.status(200).json({ msg: "menu_jura updated successfuly" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const deleteMenu = async (req, res) => {
	try {
		const menu_jura = await menu_jura.findOne({
			where: {
				uuid: req.params.id,
			},
		});
		if (!menu_jura)
			return res.status(404).json({ msg: "Data tidak ditemukan" });
		const { name, price } = req.body;
		if (req.role === "admin") {
			await menu_jura.destroy({
				where: {
					id: menu_jura.id,
				},
			});
		} else {
			if (req.userId !== menu_jura.userId)
				return res.status(403).json({ msg: "Akses terlarang" });
			await menu_jura.destroy({
				where: {
					[Op.and]: [{ id: menu_jura.id }, { userId: req.userId }],
				},
			});
		}
		res.status(200).json({ msg: "menu_jura deleted successfuly" });
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
