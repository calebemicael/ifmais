'use strict'

const sequelize = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('backup', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
      },
      
      situation: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'erro'
      },

      customers_cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      old_created_at: {
        type: Sequelize.DATE,
      },

      old_updated_at: {
        type: Sequelize.DATE,
      },

      created_at: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()'),
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('backup')
  }
}
