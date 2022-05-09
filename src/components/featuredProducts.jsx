import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "../UI/slick-carousel/slick/slick.css"
import "../UI/slick-carousel/slick/slick-theme.css"
import { product } from '../services/productServices';
import { useDispatch } from 'react-redux';
import { useraction } from '../actions/action';
import { Link } from 'react-router-dom';

const settingSlider = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnhover: true,
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


const FeaturedProduct = () => {
  const dispatch = useDispatch()
  const [value, setvalue] = useState([]);

  const AddToCart = async (sku) => {
    const user_id = localStorage.getItem('card_id');
    let product_details = {
      sku_name: sku,
      qty: 1,
      quote_id: user_id
    }
    dispatch(useraction.AddToCartRequest(product_details));
  }

  const AddToWishList = (sku_name) => {
    dispatch(useraction.AddToWishListRequest(sku_name))
  }

  useEffect(async () => {

    const result = await product.featuredProductApi();

    setvalue(result.data.items)

    console.log(result)

  }, []);

  return (

    <>
      {value.length > 0 ?
        <section className="product-item-info">
          <div className="container-fluid my-5">
            <h3 className="text-center my-4 heading-text">
              Featured Products
            </h3>
            <div >
              <Slider className="row" {...settingSlider} >
                {value.map((item, index) => (
                  <div className="col-lg-12">
                    <div className="product-info">
                      <div className="product-image">
                        <Link to={'product/' + item.sku}><img src={item.custom_attributes[0].value} className="img-fluid" /></Link>
                      </div>
                      <div className="product-title"><a href={'product/'+item.sku}>{item.name}</a></div>
                      <div className="product-price">${item.price}</div>
                      <div className="add-wishlist-out">
                        <div className="add-to-cart-outer">
                          <button onClick={() => { AddToCart(item.sku) }} className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>Add to cart</button>
                        </div>
                        <div className="wishlist-out">
                          <a onClick={() => { AddToWishList(item.sku) }} className="wishlist-icon"><i className="fa fa-solid fa-heart"></i></a>
                          <a href="#" className="compare-icon"><i className="fa fa-solid fa-signal"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </Slider>
            </div>
          </div>
        </section>
        : ''}
    </>
  )

}

export default FeaturedProduct
