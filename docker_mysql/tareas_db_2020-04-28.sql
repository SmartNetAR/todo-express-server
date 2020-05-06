# ************************************************************
# Sequel Pro SQL dump
# Versión 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.4.10-MariaDB)
# Base de datos: tareas_db
# Tiempo de Generación: 2020-04-28 23:45:52 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla complejidad
# ------------------------------------------------------------

DROP TABLE IF EXISTS `complejidad`;

CREATE TABLE `complejidad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `complejidad` WRITE;
/*!40000 ALTER TABLE `complejidad` DISABLE KEYS */;

INSERT INTO `complejidad` (`id`, `nombre`)
VALUES
	(1,'baja'),
	(2,'media'),
	(3,'alta');

/*!40000 ALTER TABLE `complejidad` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla tasks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tasks`;

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(25) DEFAULT NULL,
  `duracion` int(10) unsigned DEFAULT NULL,
  `descripcion` varchar(190) DEFAULT NULL,
  `terminada` tinyint(1) DEFAULT NULL,
  `usuario` varchar(25) DEFAULT NULL,
  `id_complejidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tasks_FK` (`id_complejidad`),
  CONSTRAINT `tasks_FK` FOREIGN KEY (`id_complejidad`) REFERENCES `complejidad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;

INSERT INTO `tasks` (`id`, `titulo`, `duracion`, `descripcion`, `terminada`, `usuario`, `id_complejidad`)
VALUES
	(20,'titulo de la tarea',60,'tarea creada con postman',0,'mina',3),
	(21,'titulo de la tarea',60,'tarea creada con postman',0,'mina',3),
	(22,'titulo de la tarea',60,'tarea creada con postman',0,'mina',3),
	(23,'titulo de la tarea',60,'tarea creada con postman',0,'mina',3),
	(28,'titulo de la tarea',NULL,'descripcion de la tarea',NULL,NULL,2),
	(32,'test',60,'desc',0,'mina',2);

/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
