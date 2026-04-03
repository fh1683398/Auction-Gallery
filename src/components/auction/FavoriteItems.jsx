import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const FavoriteItems = () => {
    return (
        <div className='border border-gray-300 rounded-lg'>
            <div className='flex p-6 border-b border-gray-300 gap-4 justify-center items-center font-medium text-3xl text-gray-700'>
                <FaRegHeart />
                <h4>Favorite Items</h4>

            </div>
            <div className='min-h-54 text-center flex flex-col p-12 justify-center items-center text-gray-700'>
                <h3 className='font-semibold mb-4 text-2xl'>No favorites yet</h3>
                <p>Click the heart icon on any item to add it to your favorites</p>
            </div>
            <div className='flex justify-between border-t border-gray-300 p-6'>
                <h4>Total bids Amount</h4>
                <span>$0000</span>
            </div>
        </div>
    );
};

export default FavoriteItems;