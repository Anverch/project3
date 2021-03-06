'use strict';
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define(
        'Job',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            company: DataTypes.STRING,
            job_title: DataTypes.STRING,
            salary: DataTypes.INTEGER,
            status: DataTypes.STRING,
            phone: DataTypes.BIGINT,
            in_person_interview_date: DataTypes.DATE,
            benefits: DataTypes.STRING,
            location: DataTypes.STRING,
            source: DataTypes.STRING,
            notes: DataTypes.STRING
        }
    );
    Job.associate = function (models) {
        // associations can be defined here
        Job.belongsTo(models.User, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Job;
};