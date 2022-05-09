import React,{useState,useEffect} from 'react';
import Navbar from './navbar';
import Search from './search';
import CartBag from './cartBag';
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import logo from '../../src/images/Black_Logo.png';
import { useraction } from '../actions/action';



const Header = () => {
    const selector = useSelector((state) => state);
    console.log(selector);

    const dispatch = useDispatch();

    const [show, setshow] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user')) {
            dispatch(useraction.GetWishlistItemsRequest());
        }
    }, [])
    const onClickShow = () => {
        setshow(!show);
    }
    const signout = () => {
        dispatch(useraction.SignOut());
        dispatch(useraction.GetCartItemRequest());
    }
    function details() {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem('user'));
            let userdetails = JSON.parse(user.userdetails);
            return 'WELCOME, ' + userdetails.firstname + " " + userdetails.lastname;
        }
    }
    return (
        <>
            <header className="main-header">
                {selector?.login?.loggedIn === true ?
                    <div className="welcome-box">
                        <ul><li>{selector?.login?.loggedIn === true ? details() : "WELCOME TO ENVISION STORE"}</li>
                            <li><a href="/contactus">CONTACT US</a></li>
                            {/* <li><a href="/compare">COMPARE()</a></li> */}
                            <li className="dropdown">
                                <a onClick={onClickShow} className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                    MY ACCOUNT
                                </a>
                                <div className={show === true ? "dropdown-menu dropdown-menu-right show" : "dropdown-menu dropdown-menu-right"} aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/myaccount">My Account</a>
                                    {/* <a className="dropdown-item" href="/wishlist">My Wishlist</a>
                                    <a className="dropdown-item" href="/sendinvitation">Send Invitation</a> */}
                                    <a onClick={signout} className="dropdown-item" >Sign Out</a>
                                </div>
                            </li>
                        </ul>
                        </div>
                        :
                        <div className="welcome-box">
                            <ul>
                                <li>WELCOME TO ENVISION STORE</li>
                                <li><a href="/contactus">CONTACT US</a></li>
                                {/* <li><a href="/compare">COMPARE()</a></li> */}
                                <li><Link to='/login'>SIGN IN</Link></li>
                                <li><Link to='/signup'>CREATE AN ACCOUNT</Link></li>
                            </ul>
                        </div>





                    
                }


                <div className="logo-cart-wrap">
                    <div className="logo"><Link to="/"><img src={logo} /></Link></div>
                    <Search />
                    <CartBag />
                    <div className="hamburger-nav"><button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars fa-fw"></i>
                    </button></div>
                </div>

                <Navbar />

            </header>
        </>
    )
}

export default Header