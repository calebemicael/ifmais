import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Offers from './offers-model'

class Status extends Model {
  public id!: number;

  public name: string;

  public description: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Status.init(
  {
    name: Sequelize.STRING,
    description: Sequelize.DATE,
  },
  {
    sequelize: database,
  }
)

// Status.belongsTo(Offers, {
//   foreignKey: {
//     field: 'status_id',
//     name: 'statusId'
//   },
//   as: 'offers'
// })

export default Status;