CREATE TABLE user_jura (
	user_id uuid NOT NULL DEFAULT app.uuid_generate_v4() PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password_user VARCHAR ( 50 ) NOT NULL,
	email_user VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE admin_jura (
 	admin_id NOT NULL DEFAULT app.uuid_generate_v4() PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password_admin VARCHAR ( 50 ) NOT NULL,
	email_admin VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE menu (
  id_menu SERIAL PRIMARY KEY,
  nama_menu varchar(30) NOT NULL,
  harga_menu varchar(30) NOT NULL,
  stok INT NOT NULL,
	created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP NOT NULL,
  deskripsi Text NOT NULL
);

CREATE TABLE menu_favorit (
  id_favorit SERIAL NOT NULL,
  user_id INT NOT NULL,
  id_menu INT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  PRIMARY KEY (id_favorit, user_id),
  FOREIGN KEY (user_id)
      REFERENCES user_jura (user_id),
  FOREIGN KEY (id_menu)
      REFERENCES menu (id_menu)

);

CREATE TABLE kategori_menu (
 id_kategori SERIAL NOT NULL,
  id_menu INT NOT NULL,
  nama_kategori VARCHAR ( 50 ) NOT NULL,
  PRIMARY KEY (id_kategori,id_menu),
  FOREIGN KEY (id_menu)
      REFERENCES menu (id_menu)
);

CREATE TABLE keranjang (
  id_keranjang SERIAL NOT NULL,
  id_menu INT NOT NULL,
  user_id INT NOT NULL,
  banyaknya_pesanan INT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP,
  PRIMARY KEY (id_keranjang, user_id, id_menu),
  FOREIGN KEY (user_id)
       REFERENCES user_jura (user_id), 
FOREIGN KEY (id_menu)
       REFERENCES menu (id_menu)
       );
  



