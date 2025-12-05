import React from 'react';
function broker() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
       
        <div className=" col-8 p-4"> 
          <a href="" style={{textDecoration:"none"}}>
          <h3 className="fs-5">Brokerage calculator</h3></a>
          <ul style={{textAlign:"left",lineHeight:"2.5"}} className="text-muted fs-6">
             <li>Zero Brokerage	</li>
             <li>0.03% or Rs.20/executed order whichever is lower</li>	
             <li>0.03% or Rs.20/executed order whichever is lower</li>	
             <li>Flat Rs.20 per executed order</li>
          </ul>
        </div>
        <div className=" col-4 p-4">
            <a href="" style={{textDecoration:"none"}}>
            <h3 className="fs-5">List of charges</h3></a>
        </div>
      </div>
    </div>
     );
}

export default broker;