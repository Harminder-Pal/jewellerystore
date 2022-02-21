import React, { useState, useEffect } from 'react'

import { Carousel } from 'react-bootstrap'

import { product } from '../services/productServices';

const HeaderSlider = () => {

    const [value, setvalue] = useState([]);

    useEffect(async () => {

        const result = await product.bannerApi();

        console.log(result)

        setvalue(result.data.banners);

    }, [])

    return (
        <>



            {value.length > 0 ?

                <Carousel>

                    {value.map((item, index) => (<Carousel.Item key={index} interval={3000}>

                        <div className="carousel-item active">

                            <img className="d-block w-100" src={item.resource_path} alt={item.resource_path} />

                        </div>

                    </Carousel.Item>

                    ))}



                </Carousel>

                : ''}

        </>

    )

}



export default HeaderSlider