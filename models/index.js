const User = require();
const Project = require();

User.hasMany(Project, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: ''
});

module.exports = { };
