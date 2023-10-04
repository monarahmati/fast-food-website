import React, { useEffect, useState } from 'react';
import axios from '../../Axios';
import Loading from '../Loading/Loading';

const CategoryList = () => {

    const [category , setCategory ] = useState([])
    const [loading , setLoading ] = useState(true)



    useEffect(() => {
        const fetchapicategory = async () => {
            const res = await axios.get('/FoodCategory/categories')
            setCategory(res.data)
            setLoading(false)
        }

        fetchapicategory();
            
    }, [])

    const renderLoading = () => {
        if (loading){
            return <Loading/>
        }
         return (
        <ul className="nav">
            <li className="nav-item">
                <a href="#" className="nav-link">
                  همه فست فودها    
                </a>
            </li>
            {

                category.map((category) => (
                    <li className="nav-item" key={category.id} >
                        <a href="" className="nav-link">
                            {category.name}
                        </a>
                    </li>
                ))
            }
        </ul>
        )
    }


    return (
        <nav className='container mt-n5'>
            <div className='d-flex align-items-center bg-white rounded-3 shadow-lg py-4' >
                {renderLoading()}
            </div>
        </nav>
    );
};

export default CategoryList;