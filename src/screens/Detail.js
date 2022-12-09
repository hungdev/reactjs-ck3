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
import { products } from '../fakeData';
import Header from '../components/Header';

const sizeList = [40, 41, 42, 43];

function App() {
  return (
    <div>
      {/* header */}
      <Header />

      {/* product detail */}
      <div>
        <div className='flex flex-row mt-14 mb-8'>
          <div className='w-1/2'>
            <img src={`${require("../assets/images/shoe1.jfif")}`} alt={'shoes'} className='object-cover w-full' style={{ height: 500 }} />
          </div>
          <div className='w-1/2 px-8'>
            <div className='bg-gray-800 inline-block p-2 px-6 text-white font-bold'>MEN</div>
            <div className='text-4xl font-bold my-1'>NIKE</div>
            <div>Nike Air Force 1 '07 LV8'</div>
            <div className='my-2'>Rating: 4⭐</div>
            <div>Price: 5000$</div>
            <div className='my-2 border-dashed border-y-2 border-gray-500 py-4'>
              Sử dụng vải canvas NE phối hợp cùng da lộn, Vintas Mister phiên bản mới gia tăng thêm độ thoải mái khi lên chân,
              đồng thời vẫn nguyên vẹn diện mạo cổ điển đầy cuốn hút. Lựa chọn không thể bỏ qua đối với mọi tín đồ theo đuổi
              nét đẹp mang dấu ấn thời gian.ou know best:
              era-echoing, '80s construction, bold details and nothin'-but-net style.
            </div>
            <div className='flex flex-row items-center'>
              <div className='mr-2'>Available sizes:</div>
              {sizeList.map(e => (
                <div className='mr-2 mt-2 flex px-4 h-11 justify-center items-center uppercase font-medium border border-gray-400 cursor-pointer'>
                  {e}
                </div>
              ))}
            </div>
            <div className='flex flex-row mt-4'>
              <div className='w-1/2 bg-gray-800 h-11 flex justify-center items-center uppercase font-medium text-white cursor-pointer'>
                Add to cart
              </div>
              <div className='ml-2 flex px-4 bg-gray-200 h-11 justify-center items-center uppercase font-medium text-white cursor-pointer'>
                <FaHeart
                  className='text-gray-800'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Description
        </div>
        <div className='px-40 my-4'>
          RACER TR21 SHOES
          RUNNING-INSPIRED SHOES FOR DAILY WEAR.
          Bring the comfort and athletic style of running footwear to your everyday look in these adidas shoes. Step through your day confidently with a snug fit and a lightweight midsole that cushions your feet with every step.

          This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content. No virgin polyester.
        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Reviews
        </div>
        <div className='px-40 my-4'>
          <div className='flex flex-row justify-between mb-4'>
            <div className='font-bold text-xl'>841 reviews</div>
            <div className='underline'>Write a review</div>
          </div>

          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>
          <div className='w-3/4 mb-4'>
            <div className='font-bold'>Michel jackson</div>
            <div className='text-xs'>2022-01-03 20:40:10</div>
            <div>Soft, comfortable, lightweight, made out of recyclable materials, great look. I like the fact they are dark grey</div>
          </div>

        </div>

        <div className='border-dashed border-t-2 border-gray-500 pt-4 text-center font-bold text-xl'>
          Products viewed
        </div>
        <div className='flex flex-row justify-around px-40 my-4'>
          {products.slice(2, 6).map(e => (
            <div className='mr-6'>
              <img src={e.img} alt={'shoes'} className='object-cover w-72 h-72' />
            </div>
          ))}
        </div>

      </div>


    </div >
  );
}

export default App;
