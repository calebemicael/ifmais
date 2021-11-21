import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Workers from './workers-model';
import Products from './products-model';
import Status from './status-model';

class Offers extends Model {
  public id!: number;

  public amount: number;

  public description: string;

  public comment: string;

  public price: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Offers.init(
  {
    amount: Sequelize.INTEGER,
    description: Sequelize.STRING,
    comment: Sequelize.STRING,
    price: Sequelize.FLOAT,
  },
  {
    sequelize: database,
  }
)

// Offers.belongsTo(Workers, {
//   foreignKey: {
//     field: 'worker_id',
//     name: 'workerId'
//   },
//   as: 'worker'
// })

// Offers.belongsTo(Status, {
//   foreignKey: {
//     field: 'status_id',
//     name: 'statusId'
//   },
//   as: 'status'
// })

// Offers.belongsTo(Products, {
//   foreignKey: {
//     field: 'product_id',
//     name: 'product_id'
//   },
//   as: 'product'
// })

export default Offers;