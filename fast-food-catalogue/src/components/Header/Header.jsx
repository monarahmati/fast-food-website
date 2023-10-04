import React from 'react';
// style components
import './Header.css'


const Header = () => {
    return (
        <header className='bg-size-cover bg-position-center py-5'>
            <div className="container">
                <h1 className='text-start text-light text-uppercase'>
                    fastfood
                </h1>
            </div>
        </header>
    );
};

export default Header;