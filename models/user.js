module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
  });
};
