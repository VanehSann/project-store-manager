const connection = require('./connection');

const productsModel = {

  getAllProducts: async () => {
    const sql = 'select * from StoreManager.products;';
    const [products] = await connection.query(sql);
    return products;
  },
  getProductById: async (id) => {
    const sql = 'select * from StoreManager.products where id = ?;';
    const [[product]] = await connection.query(sql, [id]);
    return product;
  },

};

module.exports = productsModel;