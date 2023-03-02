import '../App.scss';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { products } from '../fakeData';
import Heart from '../assets/Heart';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { getImagePath } from '../utils';
import { addProduct } from '../store/productSlice';
import { getProduct } from '../store/productThunkSlice';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const productListData = useSelector(state => state.productThunk.productList);


  // cách gọi redux thunk
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // cách gọi cũ
  // useEffect(() => {
  //   const callApi = async () => {
  //     const result = await axios.get('http://localhost:3000/product');
  //     console.log(result.data);
  //     setProductList(result.data);
  //   };
  //   callApi();
  // }, []);


  const onAddProduct = (product) => () => {
    dispatch(addProduct({ ...product, quantity: 1, size: product.size?.[0] }));
  };

  return (
    <div>
      {/* header */}
      <Header />

      {/* product */}
      <div className="head">Products</div>
      <div className='product-container flex flex-row'>
        {/* filter column */}
        <div className='w-72 mr-10'>
          <div className='mt-6 flex flex-row items-center justify-between'>
            <div className='text-2xl font-bold'>Filter</div>
            <div className='cursor-pointer mr-8'>Clear all</div>
          </div>

          <div className='font-bold mt-2'>Gender</div>

          <div className=''>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="men"
                name="gender"
                value="men"
              // checked={gender === "MEN"}
              // onChange={() => {}}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="women"
                name="gender"
                value="women"
              // checked={gender === "women"}
              // onChange={() => {}}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div>
              <input
                className='mr-1 ml-4 mt-4'
                type="radio"
                id="kid"
                name="gender"
                value="kid"
              // checked={gender === "kid"}
              // onChange={() => {}}
              />
              <label htmlFor="kid">Kid</label>
            </div>
          </div>

          <div className='font-bold mt-2'>Rating</div>
          <div className="flex flex-row justify-between w-11/12 mt-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <p key={item}>
                {item}
                <sup>⭐</sup>
              </p>
            ))}
          </div>
          <div className="">
            <input
              type="range"
              className="w-11/12"
              min={1}
              max={5}
            // value={2}
            // onChange={(e) => { }}
            />
          </div>

          <div className='font-bold mt-2'>Brand</div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option1"
              name="nike"
            // checked={'nike'}
            // onChange={() => {}}
            />
            <label htmlFor="option1">Nike</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option2"
              name="adidas"
            // checked={'adidas'}
            // onChange={() => {}}
            />
            <label htmlFor="option2">Adidas</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option3"
              name="puma"
            // checked={'puma'}
            // onChange={() => {}}
            />
            <label htmlFor="option3">Puma</label>
          </div>
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="checkbox"
              id="option4"
              name="vans"
            // checked={'vans'}
            // onChange={() => {}}
            />
            <label htmlFor="option4">Vans</label>
          </div>
        </div>

        {/* item column */}
        <div className='flex-1'>
          <div className='flex flex-row items-center'>
            <div className='mr-2'>Sort by</div>
            <select
              className='border rounded border-gray-600 h-9'
            // value={selectedSort}
            // onChange={(e) => {
            //     setSelectedSort(e.target.value);
            //     dispatch({ type: e.target.value });
            // }}
            >
              <option>Please select an option</option>
              <option value="HIGH_TO_LOW">
                Price: High to Low
              </option>
              <option value="LOW_TO_HIGH">
                Price: Low to High
              </option>
            </select>
          </div>

          {/* item */}
          <div className='flex flex-wrap overflow-auto mt-4 -mr-10' style={{ height: 'calc(100vh - 16rem)' }}>
            {productListData.map(e => {
              return (
                <div className='mr-12 mb-12' style={{ width: 'calc(25% - 48px)' }}>
                  <div className="relative">
                    {/* <img src={require(`../assets/images/${e.image}`)} alt={e.title} className='object-cover h-48 w-full' /> */}
                    <img src={getImagePath(e.image)} alt={e.title} className='object-cover h-48 w-full' />
                    <div className="wrap-heart">
                      <Heart />
                    </div>
                  </div>
                  <div className='p-1' onClick={() => navigate(`/detail/${e.id}`, { state: { name: 'ahihi' } })}>
                    <div className='font-bold'>{e.name}</div>
                    <div>{e.detail}</div>
                    <div>{e.rating}⭐</div>
                    <div>{e.price}$</div>
                  </div>
                  <div onClick={onAddProduct(e)} className='bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                    Add to cart
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
