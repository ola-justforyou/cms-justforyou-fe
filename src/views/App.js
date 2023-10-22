import '../App.css';
// import { useEffect } from 'react';
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
import {
  getAllProducts,
  getProductById,
  getSearchProducts,
  getAllProductsCategories,
  getAllProductsByCategory,
} from '../actions/productAction';
import {
  getAllUsers,
  getUserById,
  getSearchUsers,
} from '../actions/userAction';
function App(props) {
  const {
    state,
    products,
    product,
    categories,
    users,
    user,
    getWaybill,
    getAllProducts,
    getProductById,
    getSearchProducts,
    getAllProductsCategories,
    getAllProductsByCategory,
    getAllUsers,
    getUserById,
    getSearchUsers,
  } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  const getDataProducts = async () => {
    await getAllProducts();
  };
  const getDataProduct = async (id) => {
    await getProductById(id);
  };
  const getSearchDataProducts = async (query) => {
    await getSearchProducts(query);
  };
  const getDataProductsCategories = async () => {
    await getAllProductsCategories();
  };
  const getDataProductsByCategory = async (category) => {
    await getAllProductsByCategory(category);
  };
  const getDataUsers = async () => {
    await getAllUsers();
  };
  const getDataUser = async (id) => {
    await getUserById(id);
  };
  const getSearchDataUsers = async (query) => {
    await getSearchUsers(query);
  };
  useEffect(() => {
    // getDataWaybill();
    // getDataProducts();
    // getDataProduct(1);
    // getSearchDataProducts('samsung');
    // getDataProductsCategories();
    // getDataProductsByCategory('smartphones');
    // getDataUsers();
    // getDataUser(1);
    getSearchDataUsers('as');
  }, []);
  // console.log(categories, 'categories');
  // console.log(products, 'products');
  console.log(users, 'users');
  return (
    <div className='w-screen h-screen flex'>
      <div className='m-auto'>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.waybill.data,
  products: state.products.datas,
  product: state.products.data,
  categories: state.products.categories,
  users: state.users.datas,
  user: state.users.data,
});
export default connect(mapStateToProps, {
  getWaybill,
  getAllProducts,
  getProductById,
  getSearchProducts,
  getAllProductsByCategory,
  getAllProductsCategories,
  getAllUsers,
  getUserById,
  getSearchUsers,
})(App);
