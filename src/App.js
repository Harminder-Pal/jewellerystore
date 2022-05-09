import React from 'react'
import Navbar from './components/navbar'
import Menubar from './components/menubar'
import Login from './components/login'
import Signup from './components/signup'
import HomePage from './components/homePage'
import Products from './components/product'
import CartDetails from './components/cartDetails'
import Wishlist_page from './components/wishlistPage'
import ProductList from './components/productList'
import ForgetPassword from './components/forgetPassword'
import ResetPassword from './components/resetPassword'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shipping from './components/shipping'
import Payment from './components/payments'
import BlogPage from './components/blog'
import SearchPage from './components/SearchPage'
import AboutUs from './components/AboutUs'
import ThankYou from './components/ThankYou'
import ContactUs from './components/ContactUs'
import MyAccount from './components/MyAccount'
import CheckOutPage from './components/CheckOut'
import SendInvitation from './components/SendInvitation'
import ComparePage from './components/Compare'
import TermsConditions from './components/Terms&Conditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import Header from './components/header'
import JewellryFooter from './components/jewellryFooter'


const App=()=>{
return(
  <>
  <Header />
  {/* <Router> */}
  
  <Switch>
        {/* <Route exact path='/navbar' component={} {< Navbar />}></Route> */}
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/product/:sku_name' component={Products}/>
        <Route exact path='/cartDetails' component={ CartDetails} />
        <Route exact path='/wishlist' component={Wishlist_page} />
        <Route path='/products/:name' component={ProductList}/>
        <Route exact path='/forgetpassword' component={ForgetPassword} />
        <Route path='/resetpassword' component={ResetPassword} />
        <Route exact path = '/placeorder' component={Payment} />
        <Route exact path = '/blog/:id' component={BlogPage} />
        <Route  path='/catalogsearch/result' component={SearchPage} />
        <Route exact path = '/aboutus' component={AboutUs} />
        <Route exact path = '/contactus' component={ContactUs} />
        <Route exact path = '/myaccount' component={MyAccount} />
        <Route exact path='/shipping' component={CheckOutPage} />
        <Route exact path ='/sendinvitation' component={SendInvitation} />
        <Route exact path ='/thankyou' component={ThankYou} />
        <Route exact path ='/compare' component={ComparePage} />
        <Route exact path ='/termsconditions' component={TermsConditions} />
        <Route exact path = '/privacypolicy' component={PrivacyPolicy} />
 </Switch>
 
{/* </Router> */}
<JewellryFooter />
</>
)
}

export default App