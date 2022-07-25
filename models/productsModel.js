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
  updateNewProduct: async (id, name) => {
    const sql = 'update StoreManager.products set name = ? where id = ?;';
    const [product] = await connection.query(sql, [name, id]);
    return {
      id: product,
      name,
    };
  },
  deleteProduct: async (id) => {
    const sql = 'delete from StoreManager.products where id = ?;';
    const [product] = await connection.query(sql, [id]);
    return product;
  },
  getSearchProducts: async (q) => {
    const searchName = `%${q}%`;
    const sql = 'select id, name from StoreManager.products where name like ?;'; // name like %?%;
    const [products] = await connection.query(sql, [searchName]);
    // aperfeiçoado com ajuda da thread 
    // https://trybecourse.slack.com/archives/C02L83FCV4K/p1656961494902899?thread_ts=1656957008.376629&cid=C02L83FCV4K
    return products;
  },
};

module.exports = productsModel;