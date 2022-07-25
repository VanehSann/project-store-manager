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
  addNewProduct: async (name) => {
    const sql = 'insert into StoreManager.products (name) values (?);';
    const [{ insertId }] = await connection.query(sql, [name]);
    return {
      id: insertId,
      name,
    };
  },

};

module.exports = productsModel;