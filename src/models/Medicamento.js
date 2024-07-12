const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Medicamento = sequelize.define('medicamento', {
	NombreMedicamento: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Fecha: {
		type: DataTypes.DATEONLY,
		allowNull:false
	}
});

module.exports = Medicamento;