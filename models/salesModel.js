const connection = require('./connection');

const salesModel = {

  getAllSales: async () => {
      const sql = `select b.sale_id as saleId, a.date, b.product_id as productId, b.quantity
  from StoreManager.sales as a
  inner join StoreManager.sales_products as b
  on a.id = b.sale_id
  order by saleId, productId;`;
    const [sales] = await connection.query(sql);
    return sales;
  },
  getProductById: async (id) => {
    const sql = `select a.date, b.product_id as productId, b.quantity
 from StoreManager.sales as a
 inner join StoreManager.sales_products as b
 on a.id = b.sale_id
 where id = ?
 order by saleId, productId;`;
    const [[sale]] = await connection.query(sql, [id]);
    return sale
  },
  addNewSale: async (productsId, quantity) => {
    // req06 - O que eu tenho que inserir exatamente? 
    const sql = 'insert into StoreManager.sales (productsId, quantity) values (?, ?) and StoreManager.sales_products (productsId, quantity) values (?, ?);';
    const [{ insertId }] = await connection.query(sql, [productsId, quantity]);
    return {
      id: insertId,
      itemsSold: [
        {
          productId,
          quantity
        }
      ]
    };
  },

};

module.exports = salesModel;