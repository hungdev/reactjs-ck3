import '../App.scss';
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { products } from '../fakeData';
import Header from '../components/Header';
import { getImagePath } from '../utils';
import { removeProduct } from '../store/productSlice';

const sizeList = [40, 41, 42, 43];

function App() {
  const dispatch = useDispatch();
  const listTaskStore = useSelector((state) => state.product.productList);

  const onRemoveItem = (item) => () => {
    dispatch(removeProduct(item));
  };
  return (
    <div>
      {/* header */}
      <Header />
      {/* cart */}
      <div className='mt-16 px-16'>
        <div className='text-4xl font-bold mb-4'>Items in Wishlist: 8</div>

        <div className='flex flex-row'>
          <div className='flex-1 mr-8'>
            {listTaskStore?.map(item => {
              return (
                <div key={item?.id} className='flex flex-row hover:border p-2 mb-6'>
                  <img src={getImagePath(item.image)} alt={'shoes'} className='object-cover w-40 h-40' />
                  <div className='ml-4 w-full'>
                    <div className='flex justify-between'>
                      <div className='font-bold'>{item?.name}</div>
                      <div className='font-bold'>{item?.price}$</div>
                    </div>
                    <div className='text-xs font-bold text-gray-600'>Nike</div>
                    <div>Black/Rough Green/White/Total Orange</div>
                    <div className='flex flex-row my-4'>
                      <div className="mr-10">
                        <label htmlFor="size">Size</label>
                        <select name="variant" id="variant" className="ml-2">
                          {item?.size?.map(el => <option>{el}</option>)}
                        </select>
                      </div>
                      <div className='flex flex-row'>
                        <div className='mr-2'>Quantity</div>
                        <div className='flex flex-row'>
                          <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>-</div>
                          <div className='h-6 w-6 bg-gray-300 flex justify-center items-center'>1</div>
                          <div className='h-6 w-6 bg-gray-200 flex justify-center items-center cursor-pointer'>+</div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                      <div className='mr-4 bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Move to wishlist</div>
                      <div onClick={onRemoveItem(item)} className='bg-gray-800 h-8 rounded px-2 flex justify-center items-center uppercase text-white cursor-pointer'>Remove</div>
                    </div>
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
