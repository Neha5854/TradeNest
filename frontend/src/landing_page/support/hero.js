import React from "react";
function hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className="p-5" id="supportwrapper">
        <h4>Support Portal </h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5">
        <div className=" col-6 p-5">
        <h2 className="fs-3">Search for an answer or browse help topics to create a ticket</h2>
        <input placeholder="eg. how do I activate F&O"className="mb-3"/><br/>
<a href="">Track account opening</a>
<a href="">Track segment activation</a>
<a href="">Intraday margins</a>
<a href="">Kite user manual</a>        
        </div>
        <div className=" col-6 p-5 ">
       <h1 className="fs-3">Featured</h1>
       <ol>
        <li><a href="">Offer for sale (OFS) – November 2025</a></li>
        <li><a href="">Current Takeovers and Delisting – November 2025</a></li>
       </ol>
        </div>
      </div>
    </section>
  );
}

export default hero;
