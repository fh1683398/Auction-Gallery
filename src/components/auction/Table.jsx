import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Table = ({ favItem, handleBidNowBtn }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("data.json").then(res => res.json()).then(data => setItems(data))
    }, [])
    return (
        <div id='auction' className='bg-white rounded-xl'>
            <table className='p-4 md:p-8 w-full'>
                <thead>
                    <tr className='border-b border-gray-300 text-left md:text-lg lg:text-xl text-xs text-gray-700'>
                        <th className='py-4 md:py-8 px-4 font-medium'>Items</th>
                        <th className='py-4 md:py-8 px-4 font-medium'>Current Bid</th>
                        <th className='py-4 md:py-8 px-4 font-medium'>Time Left</th>
                        <th className='py-4 md:py-8 px-4 font-medium text-center'>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            const isFavorite = favItem.some(fav => fav.id === item.id);
                            return (
                                <tr key={item.id} className='border-b border-gray-300 text-gray-700 last:border-b-0'>
                                    <td className='p-4 flex flex-col md:flex-row md:items-center gap-4 text-left'>
                                        <img className='w-16 h-16 md:w-24 md:h-24 object-cover' src={item.image} alt={item.title} />
                                        <span className='text-xs md:text-base'>{item.title}</span>
                                    </td>
                                    <td className='p-4 text-xs md:text-base'>${item.currentBidPrice}</td>
                                    <td className='p-4 text-xs md:text-base'>{item.timeLeft}</td>
                                    <td className='p-4'>
                                        <div className='flex items-center justify-center'>
                                            <button className={`${isFavorite ? "cursor-not-allowed" : "cursor-pointer"}`}
                                                onClick={() => handleBidNowBtn(item)}
                                                disabled={isFavorite}>
                                                {isFavorite ? <FcLike /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;