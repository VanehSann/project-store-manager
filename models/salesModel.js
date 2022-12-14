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
  getSaleById: async (id) => {
    const sql = `select a.date, b.product_id as productId, b.quantity
 from StoreManager.sales as a
 inner join StoreManager.sales_products as b
 on a.id = b.sale_id
 where id = ?;`;
    const [sale] = await connection.query(sql, [id]);
    return sale;
  },
  addNewSale: async (_productId, _quantity) => {
    // req06 - O que eu tenho que inserir exatamente? 
    // const sql = 'insert into StoreManager.sales (productId, quantity) values (?, ?);';
    // const [{ insertId }] = await connection.query(sql, [productId, quantity]);
    // // return {
    //   id: insertId,
    //   itemsSold: [
    //     {
    //       productId,
    //       quantity,
    //     },
    //   ],
    // };
  },
  updateNewSale: async (_id, _productId, _quantity) => {
    // const sql = 'update StoreManager.sales set quantity = ? where id = ? and sale_id = ?;';
    // await connection.query(sql, [productId, id]);
    // return {
    //   productId,
    //   quantity,
    // };
  },
  deleteSale: async (id) => {
    const sql = 'delete from StoreManager.sales where id = ?;';
    await connection.query(sql, [id]);
    const sql2 = 'delete from StoreManager.sales_products where sale_id = ?;';
    await connection.query(sql2, [id]);
    return id;
  },

};

module.exports = salesModel;