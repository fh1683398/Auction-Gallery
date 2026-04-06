import { FaRegHeart } from "react-icons/fa";
import { GoX } from "react-icons/go";

const FavoriteItems = ({ favItem, handleRemoveItem }) => {
    const newAmount = favItem.reduce((total, item) => {
        return (total + item.currentBidPrice)
    }, 0)

    return (
        <div id="favItemSection" className='border border-gray-300 rounded-lg  text-gray-700 bg-white'>
            <div className='flex p-6 border-b border-gray-300 gap-4 justify-center items-center font-medium text-2xl'>
                <FaRegHeart />
                <h4>Favorite Items</h4>

            </div>
            {
                favItem.length > 0 ? (
                    favItem.map(item => <div key={item.id} className='p-4 border-b border-gray-300 last:border-b-0'>
                        {
                            <div className='flex gap-4'>
                                <div className=''>
                                    <img className='w-12 h-12 md:w-20 md:h-20 object-cover' src={item.image} alt={item.title} />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xs md:text-base mb-4'>{item.title}</p>
                                    <div className='flex gap-12'>
                                        <span className='text-xs md:text-base'>${item.currentBidPrice}</span>
                                        <span className='text-xs md:text-base'>Bids: {item.bidsCount}</span>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleRemoveItem(item)}><GoX size={25} /></button>
                                </div>
                            </div>
                        }
                    </div>)
                ) : (
                    <div className='min-h-54 text-center flex flex-col p-12 justify-center items-center'>
                        <h3 className='font-semibold mb-4 text-2xl'>No favorites yet</h3>
                        <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>
                )
            }

            <div className={`flex justify-between p-4 ${favItem.length < 1 ? "border-t border-gray-300": ""}`}>
                <h4 className='md:text-xl'>Total bids Amount</h4>
                <span className='font-medium md:text-xl'>${newAmount}</span>
            </div>
        </div>
    );
};

export default FavoriteItems;