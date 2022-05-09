import React, { useEffect, useState } from 'react'
import logo from '../images/Black_Logo.png'
import img1 from '../images/payment-icon_1.png'
import img2 from '../images/payment-icon_2.png'
import img3 from '../images/payment-icon_3.png'
import img4 from '../images/payment-icon_4.png'
// import { product } from '../services/productServices';



const JewellryFooter = () => {

    // const [value, setvalue] = useState([]);

    // useEffect(async () => {

    //     const result = await product.footerApi();

    //     setvalue(result.data.items)

    //     console.log(result)

    // }, []);

    return (

        <>

<footer>
      <section className="footer-upper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="foooter-links">
                <h3>Collections</h3>
                <ul>
                  <li><a href="/products/COLLECTIONS/RING">Rings</a></li>
                  <li><a href="/products/COLLECTIONS/NECKLACES">Necklaces</a></li>
                  <li><a href="/products/COLLECTIONS/EARRINGS">Earrings</a></li>
                  <li><a href="/products/COLLECTIONS/BANGLES">Bangles</a></li>
                  <li><a href="/products/BRIDAL%20SETS">Bridal Set</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foooter-links">
                <h3>About</h3>
                <ul>
                  <li><a href="/aboutus">About us</a></li>
                  <li><a href="/contactus">Contact us</a></li>
                  <li><a href="/products/collections">All Collections</a></li>
                  <li><a href="/privacypolicy">Privacy policy</a></li>
                  <li><a href="/termsconditions">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-logo">
                <a href="/" ><img src={logo} /></a>
              </div>
              <ul className="footer-connect my-4">
                <li>
                  <div className="footer-contact">CALL US NOW:</div>
                  <div className="footer-contact-bold">+123 5678 890</div>
                </li>
                <li>
                  <div className="footer-contact">E-MAIL ADDRESS:</div>
                  <div className="footer-contact-bold">sales@envisioneCommerce.com</div>
                </li>
                {/* <li>
                  <div className="footer-contact">follow us:</div>
                  <div className="social-network">
                    <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                  </div>
                </li> */}
              </ul>
              <div className="footer-contact mt-3">follow us:</div>
                  <div className="social-network">
                    <a href="https://www.facebook.com"><i className="fab fa-facebook-f mx-1"></i></a>
                    <a href="https://www.twitter.com"><i className="fab fa-twitter mx-1"></i></a>
                    <a href="https://www.instagram.com"><i className="fab fa-instagram mx-1"></i></a>
                  </div>
            </div>
          </div>
        </div>
      </section>
      <section className="foooter-below">
        <div className="container">
          <div className="footer-block">
            <div className="payments-options">
              <span><img src={img1} /></span>
              <span><img src={img2} /></span>
              <span><img src={img3} /></span>
              <span><img src={img4} /></span>
            </div>
            <div>
              <p>© Envision eCommerce. 2021. All Rights Reserved</p>
            </div>
          </div>
      </div>
      </section>
    </footer>

{/*             
            {value.map((item, index) => (

                <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />

                ))} */}
            {/* <footer>
                <section className="footer-upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="foooter-links">
                                    <h3>Collections</h3>
                                    <ul>
                                        <li><a href="plp/category_id/116">Rings</a></li>
                                        <li><a href="plp/category_id/117">Necklaces</a></li>
                                        <li><a href="plp/category_id/118">Earrings</a></li>
                                        <li><a href="plp/category_id/119">Bangles</a></li>
                                        <li><a href="plp/category_id/121">Bridal Set</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="foooter-links">
                                    <h3>About</h3>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">All Collections</a></li>
                                        <li><a href="#">Privacy policy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-logo"><a href="http://192.168.10.129:3000"><img src="http://cf467543a5.nxcli.net/media/wysiwyg/Black_Logo_1.png" width="200" height="100" /></a></div>
                                <ul className="footer-connect my-4">
                                    <ul className="footer-connect my-4">
                                        <ul className="footer-connect my-4">
                                            <ul className="footer-connect my-4">
                                                <li>
                                                    <div className="footer-contact">CALL US NOW:</div>
                                                    <div className="footer-contact-bold">+123 5678 890</div>
                                                </li>
                                                <li>
                                                    <div className="footer-contact">E-MAIL ADDRESS:</div>
                                                    <div className="footer-contact-bold">sales@envisioneCommerce.com</div>
                                                </li>
                                                <li>
                                                    <div className="footer-contact">follow us:</div>
                                                    <i className="fa fa-facebook" width="10%" height="10%"></i><i className="fa fa-twitter" width="10%" height="10%"></i><i className="fa fa-linkedin"></i>
                                                </li>
                                            </ul>
                                        </ul>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="foooter-below">
                    <div className="container">
                        <div className="footer-block">
                            <div className="payments-options"><img src="http://cf467543a5.nxcli.net/media/wysiwyg/payment-icon_1_1.png" /></div>
                            <div>
                                <p>© Envision eCommerce. 2021. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer> */}





        </>

    )

}



export default JewellryFooter