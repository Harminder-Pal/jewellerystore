import React, {useEffect, useState} from 'react';
import { product } from '../services/productServices';
import "../UI/slick-carousel/slick/slick.css"
import "../UI/slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

const settingSlider = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnhover:true,
    responsive: [

      {

          breakpoint: 1024,

          settings: {

              slidesToShow: 3,

              slidesToScroll: 3,

              infinite: true,



          }

      },

      {

          breakpoint: 600,

          settings: {

              slidesToShow: 2,

              slidesToScroll: 2,

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



const OurHappyCustomer = () => {

    const [value, setvalue] = useState([]);

    useEffect(async () => {

        const result = await product.happyCustomerApi();

        setvalue(result.data.items)

        console.log(result)

    }, []);

  return(
    <section className="product-item-info">
    <div className="container my-5">
      <h3 className="text-center my-4 heading-text">
        Our Happy Customers  
      </h3>
      <div >
        <Slider {...settingSlider}>
        {value.map ((item,index) =>(
        <div className="col-lg-12">
          <div className="card hppy-customer-card">
            <img className="rounded-circle" src={item.image} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{item.nick_name}</h5>
              <div className="star-rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <p className="card-text">{item.testimonial}</p>
            </div>
          </div>
        </div>
        ))}
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default OurHappyCustomer