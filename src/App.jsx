
import './App.css'
import FavoriteItems from './components/auction/FavoriteItems'
import Table from './components/auction/Table'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='max-w-384 mx-auto mt-30 mb-25'>
        <h3 className='text-3xl md:text-4xl text-(--DeepBlue) mb-2 md:mb-4 font-semibold'>Auction Items</h3>
        <p className='text-gray-700'>Discover and bid on extraordinary items</p>

        <div className='md:grid grid-cols-3 gap-6 mt-8'>
          <div className='col-span-2 border border-gray-300 rounded-lg'>
            <Table></Table>
          </div>
          <div className=''>
            <FavoriteItems></FavoriteItems>
          </div>
        </div>
      </div>
    </ div>
  )
}

export default App
