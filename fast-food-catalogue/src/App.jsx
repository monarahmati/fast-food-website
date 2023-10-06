import { useEffect, useState } from 'react'
//DATA
import axios from './Axios'
//style components
import './App.css'
//image404
import notFound from './assets/images/404.png';
//components
import CategoryList from './components/CategoryList/CategoryList'
import Header from './components/Header/Header'
import Loading from './components/Loading/Loading'
import FastFoodList from './components/FastFoodList/FastFoodList'
import SearchBar from './components/searchBar/searchBar'


//fanction APP
function App() {

  const [ loading , setLoading ] = useState(false)
  const [ fastfoodData , setFastfoodData] = useState([])

  const FetchData = async ( categoryId = null) => {
    setLoading(true);
    const res = await axios.get(`/FastFood/list${ categoryId ? "?category=" + categoryId : "" }`)
    setLoading(false);
    setFastfoodData(res.data)
  }

  useEffect(() => {
    FetchData();
  }, [])

  const filterItems = (categoryId) => {
    FetchData(categoryId)
  }

  const searchItems = async (term) =>{
    setLoading(true)
    const res = await axios.get(`/FastFood/Search/${ term ? "?term=" + term : "" }`)
    setLoading(false)
    setFastfoodData(res.data)
  }

  const renderContent = () => {
    if(loading) {
      return (
        <Loading theme="dark"/>
      )
    }
    if(fastfoodData.length === 0){
      return (
        <>
          <div className="alert alert-warning text-center">
            آیتمی یافت نشد!
          </div>
          <img className='mx-auto mt-5 d-block' src={notFound}/>
        </>
      )
    }
    return (
      <FastFoodList fastfoodData={fastfoodData} />
    )
  }


  return (
    <div className='wrapper bg-faded-dark'>
        <Header/>
        <CategoryList filterItems={filterItems}>
          <SearchBar searchItems={searchItems} />
        </CategoryList>
        <div className="container mt-4">
          {renderContent()}
        </div>

    </div>

  )
}

export default App
