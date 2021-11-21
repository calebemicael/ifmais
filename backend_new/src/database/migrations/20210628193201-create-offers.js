'use strict'

const sequelize = require('sequelize')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      worker_id: {
        type: Sequelize.INTEGER,
        references: { model: 'workers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      status_id: {
        type: Sequelize.INTEGER,
        references: { model: 'status', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },

      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
      },

      comment: {
        type: Sequelize.STRING,
      },

      price: {
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable('offers')
  }
}
