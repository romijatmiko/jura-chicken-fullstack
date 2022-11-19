CREATE TABLE user_jura (
	user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	username_user VARCHAR ( 128 ) UNIQUE NOT NULL,
	password_user VARCHAR ( 128 ) NOT NULL,
	email_user VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE admin_jura (
 	admin_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
	username_admin VARCHAR ( 128 ) UNIQUE NOT NULL,
	password_admin VARCHAR ( 128 ) NOT NULL,
	email_admin VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE menu (
  id_menu uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nama_menu varchar(128) NOT NULL,
  harga_menu varchar(128) NOT NULL,
  stok INT NOT NULL,
	created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP NOT NULL,
  deskripsi Text NOT NULL,
  img VARCHAR ( 128 ) NOT NULL
);

CREATE TABLE menu_favorit (
  id_favorit uuid DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  id_menu uuid NOT NULL,
  created_on TIMESTAMP NOT NULL,
  PRIMARY KEY (id_favorit, user_id),
  FOREIGN KEY (user_id)
      REFERENCES user_jura (user_id),
  FOREIGN KEY (id_menu)
      REFERENCES menu (id_menu)

);

CREATE TABLE kategori_menu (
 id_kategori uuid DEFAULT uuid_generate_v4(),
  id_menu uuid NOT NULL,
  nama_kategori VARCHAR ( 128 ) NOT NULL,
  PRIMARY KEY (id_kategori,id_menu),
  FOREIGN KEY (id_menu)
      REFERENCES menu (id_menu)
);

CREATE TABLE keranjang (
  id_keranjang uuid DEFAULT uuid_generate_v4(),
  id_menu uuid  NOT NULL,
  user_id uuid NOT NULL,
  banyaknya_pesanan INT NOT NULL,
  created_on TIMESTAMP NOT NULL,
  updated_on TIMESTAMP,
  PRIMARY KEY (id_keranjang, user_id, id_menu),
  FOREIGN KEY (user_id)
       REFERENCES user_jura (user_id), 
FOREIGN KEY (id_menu)
       REFERENCES menu (id_menu)
       );