
import { useEffect, useState } from 'react'
import './App.css'
import FavoriteItems from './components/auction/FavoriteItems'
import Table from './components/auction/Table'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [favItem, setFavItem] = useState([])

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("favItems")) || []
    setFavItem(storedItems)
    
  }, [])

  const handleBidNowBtn = (item) => {
    const isExist = favItem.find(fav => fav.id === item.id)
    if (isExist) {
      toast('‼️Item is already in the list')
      return
    }
    const newFavItems = [...favItem, item]
    setFavItem(newFavItems)

    //set to local storage
    const stringItems = JSON.stringify(newFavItems)
    localStorage.setItem("favItems", stringItems)
    toast("✔️Item added to the list")
  }

  const handleRemoveItem =(item)=>{
    const newList = favItem.filter(fav => fav.id !== item.id)
    setFavItem(newList)
  
    //update local storage
    localStorage.setItem("favItems", JSON.stringify(newList))
  }

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='max-w-384 mx-auto mt-30 mb-25'>
        <h3 className='text-3xl md:text-4xl text-(--DeepBlue) mb-2 md:mb-4 font-semibold'>Auction Items</h3>
        <p className='text-gray-700'>Discover and bid on extraordinary items</p>

        <div className='lg:grid grid-cols-3 gap-6 mt-8 items-start'>
          <div className='col-span-2 border border-gray-300 rounded-lg'>
            <Table handleBidNowBtn={handleBidNowBtn}></Table>
          </div>
          <div className='mt-4 lg:mt-0'>
            <FavoriteItems favItem={favItem} handleRemoveItem={handleRemoveItem}></FavoriteItems>
          </div>
        </div>
      </div>
      <ToastContainer />
    </ div>
  )
}

export default App
