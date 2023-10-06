import React, { useState } from 'react';
//icons
import {BsSearch} from 'react-icons/bs'

const searchBar = ({searchItems}) => {

    const [value , setValue] = useState("")


    const onSubmit = (event) =>{
        event.preventDefault()
        searchItems(value)
    }


    return (
        <form onSubmit={onSubmit} className='search flex-fill d-flex align-items-center' >
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control rounded-end pe-5 border-success" 
                    placeholder='جستجوی فست فود ...' 
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                />

                <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3"/>
            </div>
        </form>
    );
};

export default searchBar;