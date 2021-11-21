'use strict'

const sequelize = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },

      enterprising_id:  {
        type: Sequelize.INTEGER,
        references: { model: 'enterprising', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      authorized: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    return queryInterface.dropTable('workers')
  }
}
