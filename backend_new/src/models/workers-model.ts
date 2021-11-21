import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Enterprising from './enterprising-model'
import Offers from './offers-model'

class Workers extends Model {
  public id!: number;

  public name: string;

  public cpf: string;

  public password: string;

  public whatsapp: string;

  public email: string;

  public authorized: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Workers.init(
  {
    name: Sequelize.STRING,
    cpf: Sequelize.STRING,
    password: Sequelize.STRING,
    whatsapp: Sequelize.STRING,
    email: Sequelize.STRING,
    authorized: Sequelize.BOOLEAN,
  },
  {
    sequelize: database,
  }
)

// Workers.belongsTo(Enterprising, {
//   foreignKey: {
//     field: 'enterprising_id',
//     name: 'enterprisingId'
//   },
//   as: 'enterprising'
// })

// Workers.hasMany(Offers, {
//   foreignKey: {
//     field: 'worker_id',
//     name: 'workerId'
//   },
//   as: 'offers'
// })

export default Workers;