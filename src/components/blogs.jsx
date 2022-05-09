import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "../UI/slick-carousel/slick/slick.css"
import "../UI/slick-carousel/slick/slick-theme.css"
import { product } from '../services/productServices';



const Blogs = () => {
  const [value, setvalue] = useState([]);

  const settingSlider = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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

  useEffect(async () => {

    const result = await product.blogApi();

    console.log(result)

    setvalue(result.data.items);

  }, [])
  return (

    <>
      {value.length > 0 ?
        <section className="blogs-info">
          <div className="container">
            <h3 className="text-center mb-4 heading-text">
              Blogs
            </h3>
            <div >
              <Slider  {...settingSlider}>
                {value.map((item, index) => (
                  <div key={index} className="col-lg-12 p-2">
                    <div className="blogs-card ">
                      <div className="blog-image"><img src= {item.image} className="w-100" alt="" title="" /></div>
                      <h2 className="blog-heading">{item.name}</h2>
                      <p className="blog-descripton">{item.short_description}
                      </p>
                    {/* <ul className="blog-date-time my-3">
                      <li><i className="fa fa-solid fa-calendar"></i>{item.publish_date}</li>
                      <li><i className="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
                      <li><i className="fa fa-solid fa-eye"></i>3</li>
                    </ul> */}
                      <p className="blog-read-more mt-4"><a href={'/blog/'+item.id} title="Read More">Read more</a></p>
                    </div>
                   <br /> </div>
                ))}
              </Slider>
             </div>

          </div>
        </section>
        : ""}
    </>
  )
}




export default Blogs