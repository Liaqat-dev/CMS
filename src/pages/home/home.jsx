import React, {useState} from 'react';
import './home.css';
import Header from '../../components/header/header.jsx';
import ExploreMenu from '../../components/exploreMenu/exploreMenu.jsx';
import FoodDisplay from '../../components/foodDisplay/foodDisplay.jsx';
import AppDownload from "../../components/appDownload/appDownload.jsx";

const Home = () => {
    const [category,setCategory] = useState("All");
    return (
        <div className={'home'}>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category ={category}/>
            <AppDownload/>
        </div>
    );
}
export default Home;