import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";


const Recipes = (props) => (
    <div>
        <Navbar handleLogout ={props.handleLogout} />
            <div className='container'>
                <Search/>
            </div>
        <Footer/>
    </div>
);

export default Recipes;