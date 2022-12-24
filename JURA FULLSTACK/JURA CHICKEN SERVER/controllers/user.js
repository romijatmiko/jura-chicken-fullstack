import User from "../models/userModels.js";
import argon2 from "argon2";

export const countUser = async (req, res) => {
	try {
		let response;
		response = await User.count({
			col: "uuid",
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getUsers = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: [
				"uuid",
				"nama_user",
				"email_user",
				"no_hp",
				"alamat",
				"kabupaten",
				"kode_pos",
				"createdAt",
				"updatedAt",
				"role",
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const response = await User.findOne({
			attributes: [
				"uuid",
				"nama_user",
				"email_user",
				"no_hp",
				"alamat",
				"kabupaten",
				"kode_pos",
				"role",
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

export const createUser = async (req, res) => {
	const {
		nama_user,
		email_user,
		password_user,
		no_hp,
		alamat,
		kabupaten,
		kode_pos,
		confPassword,
		role,
	} = req.body;
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	const hashPassword = await argon2.hash(password_user);
	try {
		await User.create({
			nama_user: nama_user,
			email_user: email_user,
			no_hp: no_hp,
			alamat: alamat,
			kabupaten: kabupaten,
			kode_pos: kode_pos,
			password_user: hashPassword,
			role: role,
		});
		res.status(201).json({ msg: "Register Berhasil" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const updateUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	const {
		nama_user,
		email_user,
		password_user,
		no_hp,
		alamat,
		kabupaten,
		kode_pos,
		confPassword,
		role,
	} = req.body;
	let hashPassword;
	if (password_user === "" || password_user === null) {
		hashPassword = user.password_user;
	} else {
		hashPassword = await argon2.hash(password_user);
	}
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	try {
		await User.update(
			{
				nama_user: nama_user,
				email_user: email_user,
				no_hp: no_hp,
				alamat: alamat,
				kabupaten: kabupaten,
				kode_pos: kode_pos,
				password_user: hashPassword,
				role: role,
			},
			{
				where: {
					id: user.id,
				},
			}
		);
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	try {
		await User.destroy({
			where: {
				id: user.id,
			},
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

///admin

export const getAdmin = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: [
				"uuid",
				"nama_user",
				"email_user",
				"createdAt",
				"updatedAt",
				"role",
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getAdminById = async (req, res) => {
	try {
		const response = await User.findOne({
			attributes: ["uuid", "nama_user", "email_user", "role"],
			where: {
				uuid: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createAdmin = async (req, res) => {
	const { nama_user, email_user, password_user, confPassword, role } = req.body;
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	const hashPassword = await argon2.hash(password_user);
	try {
		await User.create({
			nama_user: nama_user,
			email_user: email_user,
			password_user: hashPassword,
			role: role,
		});
		res.status(201).json({ msg: "Register Berhasil" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const updateAdmin = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	const { nama_user, email_user, password_user, confPassword, role } = req.body;
	let hashPassword;
	if (password_user === "" || password_user === null) {
		hashPassword = user.password_user;
	} else {
		hashPassword = await argon2.hash(password_user);
	}
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	try {
		await User.update(
			{
				nama_user: nama_user,
				email_user: email_user,
				password_user: hashPassword,
				role: role,
			},
			{
				where: {
					id: user.id,
				},
			}
		);
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteAdmin = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	try {
		await User.destroy({
			where: {
				id: user.id,
			},
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
