import Sequelize, { Model } from 'sequelize';
import database from '../database';
import Customers from './customers-model'
import Offers from './offers-model'

class Products extends Model {
  public id!: number;

  public amount: number;

  public description: string;

  public situation: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Products.init(
  {
    amount: Sequelize.NUMBER,
    situation: Sequelize.STRING,
    description: Sequelize.STRING,
  },
  {
    sequelize: database,
  }
)

Products.belongsTo(Customers, {
  foreignKey: {
    field: 'customer_id',
    name: 'customerId'
  },
  as: 'customer'
})

// Products.hasMany(Offers, {
//   foreignKey: {
//     field: 'product_id',
//     name: 'product_id'
//   },
//   as: 'product'
// })

export default Products;