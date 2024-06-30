const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Paciente = sequelize.define('paciente', {
	Nombres: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Apellidos: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Telefono: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Edad: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Sexo: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Altura: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	Peso: {
		type: DataTypes.STRING,
		allowNull: false
	},
	Identificacion: {
		type: DataTypes.INTEGER,
		allowNull: false,
		unique:true
	},
	Estado: {
		type: DataTypes.STRING,
		allowNull: false
	},
	FechaIngreso: {
		type: DataTypes. DATEONLY,
		allowNull: false
	},
	Alcoholismo: {
		type: DataTypes.STRING,
		allowNull: false
	},
	ProblemasEquilibrio: {
		type: DataTypes.STRING,
		allowNull: false
	},
	DolorCabeza: {
		type: DataTypes.STRING,
		allowNull: false
	}

	//MalestarId

	//MedicamentoId

	//EnferemedadId

	//CitaId
});


module.exports = Paciente;