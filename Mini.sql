-- MiniBlog 

-- La tabla USER contiene los usuarios que se han creado en el miniblog
--   tiene un identificador numérico, pero lo que más se usa son los UUID
--   Los UUID son números de 128 bits, lo que los hace escalables, pero
--   comúnmente se representan como una cadena de caracteres
--   Si MariaDB (u otro motor seleccionado) no incluye el tipo UUID se deberán
--   usar las funciones BIN_TO_UUID() y UUID_TO_BIN()
--   tiene un username visible en los posts, un correo que es el login,
--   guarda la fecha cuando se creó la cuenta, cuando se conectó la última
--   vez y cuando cambió la contraseña por última vez. Guarda la contraseña
--   (cifrada) y la contraseña anterior (para comparar cuando se cambie).

DELIMITER $$
--
-- Functions
--
CREATE DEFINER='root@localhost'FUNCTION IF NOT EXISTS  BIN_TO_UUID (bin BINARY(16)) RETURNS CHAR(36) CHARSET utf8mb4 BEGIN
    DECLARE hex CHAR(32);
    SET hex = HEX(bin);
    RETURN LOWER(CONCAT(LEFT(hex, 8), '-', MID(hex, 9, 4), '-', MID(hex, 13, 4), '-', MID(hex, 17, 4), '-', RIGHT(hex, 12)));
  END$$

CREATE DEFINER='root@localhost' FUNCTION IF NOT EXISTS  UUID_TO_BIN (uuid CHAR(36)) RETURNS BINARY(16) BEGIN
  RETURN UNHEX(CONCAT(REPLACE(uuid, '-', '')));
END$$

DELIMITER ;

-- Schema
CREATE TABLE IF NOT EXISTS USER (
 uid integer(11) not null,
 uuid char(36) not null,
 username varchar(32) not null,
 mail varchar(128) not null,
 ucreation datetime not null default current_timestamp,
 ulastpost datetime not null,
 ulastlogin datetime not null default current_timestamp,
 password char(32) not null,
 oldpass char(32),
 lastpass datetime default current_timestamp,
 PRIMARY KEY (uid),
 UNIQUE KEY UUID (uuid),
 UNIQUE KEY USERNAME (username),
 UNIQUE KEY MAIL (mail)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
