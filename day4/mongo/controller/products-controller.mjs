// db connection import
// model import


export function getProductsItems (req, res) {
    const products = [{name: 'test1', price: 24.00}, {name: 'test2', price: 234.00}, {name: 'test3', price: 30.00}, {name: 'test4', price: 324.00}];
    res.status(200).render('products', {productsItems: products});
};