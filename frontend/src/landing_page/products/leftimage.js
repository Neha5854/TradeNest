import React from "react";
function LeftSection({
  imageURL,
  productname,
  productdescription,
  trydemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container mt-5">
    <div className="row ">
      <div className="col-6 ">
        <img src={imageURL}  />
      </div>
      
      <div className="col-6 p-5 mt-5">
        <h1>{productname}</h1>
        <p>{productdescription}</p>
        <div>
            <a href={trydemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right"aria-hidden="true"></i></a>
        <a href={learnMore} style={{marginLeft:"80px",textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right"aria-hidden="true"></i></a>
        </div>
        <div className="mt-3">
            <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
        <a href={appStore}><img src="media\images\appstoreBadge.svg" style={{marginLeft:"30px"}}/></a>
        </div>
      </div>
    </div>
  </div>;
}

export default LeftSection;
