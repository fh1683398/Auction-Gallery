import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white flex items-center justify-center py-20 md:py-32'>
            <div className='text-center'>
                <h3 className='text-gray-700 mb-4 text-2xl md:text-3xl font-bold'>Auction<span className='text-orange-500'>Gallery</span></h3>
                <p className='text-gray-700 mb-6 text-xl'>Bid. Win. Own.</p>
                <ul className='flex flex-col md:flex-row gap-3 md:gap-8 mb-8 text-gray-500'>
                    <a href="#home"><li>Home</li></a>
                    <a href="#auction"><li>Auction</li></a>
                    <a href="#auction"><li>Categories</li></a>
                    <a href=""><li>How to works</li></a>
                </ul>
                <p className='text-gray-700 text-sm'>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;