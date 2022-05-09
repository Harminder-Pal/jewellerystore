import React from 'react';

export default function ContactUs(){
    return(
        <>
            <section className="contact-us full-height">
        <div className="container">
            <div className="contactus-map">
                {/* <div style="width: 100%">
                    <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/marine-gps/">shipping gps</a>
                    </iframe>
                </div> */}
            </div>
            <div className="contact-us-form-wrap review-form-wrap text-grey">
                <div className="row">
                    <div className="col-lg-8">
                        <form>
                            <div className="slim-heading my-4">Write <strong>Us</strong></div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="label-txt" for="Name">Name<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-txt" for="Email">Email<sup>*</sup></label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="label-txt" for="Name">What’s on your mind?<sup>*</sup></label>
                                        <textarea className="form-control" rows="6">
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <button type="submit" title="Submit" className="btn btn-black">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form> 
                    </div>
                    <div className="col-lg-4">
                        <div className="slim-heading my-4">Contact<strong> Details</strong></div>
                        <div className="contact-details-wrap">
                            <div className="container-wrap">
                                <div className="left-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="right-details">
                                    <p>0201 203 2032</p>
                                    <p>0201 203 2032</p>
                                </div>
                            </div>
                            <div className="container-wrap">
                                <div className="left-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="right-details">
                                    <p>201-123-3922</p>
                                    <p>302-123-3928</p>
                                </div>
                            </div>
                            <div className="container-wrap">
                                <div className="left-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="right-details">
                                    <p>porto@gmail.com</p>
                                    <p>porto@portotemplate.com</p>
                                </div>
                            </div>
                            <div className="container-wrap">
                                <div className="left-icon">
                                    <i className="fab fa-skype"></i>
                                </div>
                                <div className="right-details">
                                    <p>porto_skype</p>
                                    <p>proto_template</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        </>
    )
}