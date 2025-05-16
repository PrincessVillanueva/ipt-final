const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Employee = sequelize.define('Employee', {
        employeeId: { type: DataTypes.STRING, allowNull: false, unique: true },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        position: { type: DataTypes.STRING, allowNull: false },
        departmentId: { type: DataTypes.INTEGER, allowNull: false },
        hireDate: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false }
    }, {
        timestamps: false
    });

    Employee.associate = (models) => {
        Employee.belongsTo(models.Account, { foreignKey: 'userId', as: 'user' });
        Employee.belongsTo(models.Department, { foreignKey: 'departmentId' });
    };

    return Employee;
}; 