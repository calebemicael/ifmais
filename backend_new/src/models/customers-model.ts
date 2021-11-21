import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Products from './products-model'

class Customers extends Model {
  public id!: number;

  public name: string;

  public cpf: string;

  public password: string;

  public email: string;

  public whatsapp: string;

  public address: string;

  public address_number: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Customers.init(
  {
    name: Sequelize.STRING,
    cpf: Sequelize.STRING,
    address: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    whatsapp: Sequelize.STRING,
    address_number: Sequelize.STRING
  },
  {
    sequelize: database,
  }
)

// Customers.hasMany(Products, {
//   foreignKey: {
//     field: 'customer_id',
//     name: 'customerId'
//   },
//   as: 'products'
// })

export default Customers;