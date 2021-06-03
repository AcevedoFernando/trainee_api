'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'projects',
          key: 'id',
          deferrable: Sequelize
            .Deferrable
            .INITIALLY_IMMEDIATE
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('files');
  }
};
