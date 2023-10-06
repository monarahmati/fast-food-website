import React from 'react';
//components
import FastFoodItems from '../FastFoodItems/FastFoodItems';

const FastFoodList = ({fastfoodData}) => {

    let delay = 0.1; 
    return (
        <div className='row'>
            {
                fastfoodData.map((fastfood) => {
                    delay += 0.030;
                    return(
                        <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.id}>
                            <FastFoodItems {...fastfood} delay={delay} />
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default FastFoodList;