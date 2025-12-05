import React from 'react';
import {Link} from "react-router-dom";
function openaccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               
                <h1 className='mt-5'>Open a Tradenest Account</h1>
                <p>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button className='p-2 btn btn-primary fs-5'style={{width:'20%',margin:"0 auto"}}><Link to="/signup"className="text-white text-decoration-none">Signup for free</Link></button>
            </div>
         </div>    
     );
}

export default openaccount;