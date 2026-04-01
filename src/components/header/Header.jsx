import React from 'react';
import bgImage from "/src/assets/hero-bg.png"

const Header = () => {
    return (
        <div style={{
            backgroundImage: `url(${bgImage})`
        }} className='relative pt-60 pb-50 bg-cover bg-center'>

            <div className='absolute inset-0 bg-black/70'></div>
            <div className='max-w-384 mx-auto'>
                <div className='relative z-10 max-w-160'>
                    <h1 className='font-semibold text-4xl md:text-5xl text-white'>Bid on Unique Items from Around the World</h1>
                    <p className='text-lg md:text-2xl text-gray-300 mt-5'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                    <button className='px-8 py-4 font-medium md:text-xl rounded-full bg-white mt-8'>Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Header;