import React ,{useState}from 'react';
import Navbar from "./components/navbar/navbar.jsx";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Cart from './pages/cart/cart.jsx';
import PlaceOrder from './pages/placeOrder/placeOrder.jsx';
import Footer from "./components/footer/footer.jsx";
import LoginPopup from "./components/loginPopUp/loginPopup.jsx";
import FeedbackForm from "./components/Feedback/FeedBackForm.jsx";
const App = () => {
    const [showLogin,setShowLogin] = useState(false);
    return (

        <>
            {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<> </>}
        <div className={'App'}>
           <Navbar  setShowLogin={setShowLogin}/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/order'} element={<PlaceOrder/>}/>
                <Route path={'/feedback'} element={<FeedbackForm/>}/>
            </Routes>
        </div>
           <Footer/>
        </>

    )

}
export default App;