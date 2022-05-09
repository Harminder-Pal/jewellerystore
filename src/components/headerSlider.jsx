import React, { useState, useEffect } from 'react'

import Slider from "react-slick"

import "../UI/slick-carousel/slick/slick.css";

import "../UI/slick-carousel/slick/slick-theme.css"

import { product } from '../services/productServices';

const HeaderSlider = () => {

    const [value, setvalue] = useState([]);

    useEffect(async () => {

        const result = await product.bannerApi();

        console.log(result)

        setvalue(result.data.banners);

    }, [])
    const settingSlider = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
    
      }

    return (
        <>



            {value.length > 0 || value.length !== undefined ?

            <Slider  {...settingSlider} >

                    {value.map((item, index) => (
                        <div id="main-carousel" key={index} className="carousel slide" data-ride="carousel" data-touch="true">
                        <ol className="carousel-indicators">
                          <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src={item.resource_path} alt="First slide"/>
                          </div>
                        </div>
                      </div>

                    //     <div className="carousel-item active">

                    //         <img className="d-block w-100" src={item.resource_path} alt={item.resource_path} />

                    //     </div>

                    // </Carousel.Item>

                    ))}



                </Slider>

                : ''}

        </>

    )

}



export default HeaderSlider