import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Workers from './workers-model'

class Enterprising extends Model {
  public id!: number;

  public name: string;

  public cnpj: string;

  public password: string;

  public email: string;

  public whatsapp: string;

  public address: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Enterprising.init(
  {
    name: Sequelize.STRING,
    cnpj: Sequelize.STRING,
    address: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    whatsapp: Sequelize.STRING,
  },
  {
    sequelize: database,
  }
)

// Enterprising.hasMany(Workers, {
//   foreignKey: {
//     field: 'enterprising_id',
//     name: 'enterprisingId'
//   },
//   as: 'workers'
// })


export default Enterprising;