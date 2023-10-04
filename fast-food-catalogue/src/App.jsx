import { useEffect, useState } from 'react'
//DATA
import axios from './Axios'
//style components
import './App.css'
//components
import CategoryList from './components/CategoryList/CategoryList'
import Header from './components/Header/Header'
import Loading from './components/Loading/Loading'


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

  const renderContent = () => {
    if(loading) {
      return (
        <Loading theme="dark"/>
      )
    }
    return (
      <FastFoodList fastfoodData={fastfoodData} />
    )
  }


  return (
    <div className='wrapper bg-faded-dark'>
        <Header/>
        <CategoryList/>
        <div className="container mt-4">
          {renderContent()}
        </div>

    </div>

  )
}

export default App
