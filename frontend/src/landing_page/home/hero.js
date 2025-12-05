import React from 'react';
import {Link} from "react-router-dom";
function hero() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest Smartly with Tradenest</h1>
                <p>
                Online platform to invest in stocks, mutual funds, and ETFs with ease and confidence.
                </p>
                <button className='p-2 btn btn-primary fs-5'style={{width:'20%',margin:"0 auto"}}><Link to="/signup"className="text-white text-decoration-none">Signup Now</Link></button>
            </div>
         </div>    
    );
}

export default hero;