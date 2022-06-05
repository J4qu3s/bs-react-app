import React from "react";
import "./component-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  return (
    <div classNameName="container d-flex justify-content-center w-100">
      <div className="row">
        {/* Empty side */}
        <div className="col-lg-3 col-md-2 col-sm-0"></div>
        {/* Content */}
        <div className="col-lg-6 col-md-8 col-sm-12">
          {/* Heading */}
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h1 className="test">Gallery</h1>
            </div>
          </div>


          {/* Cards */}
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card m-2 c-size">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card m-2 c-size">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card m-2 c-size">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Empty side */}
        <div className="col-lg-3 col-md-2 col-sm-0"></div>
      </div>
    </div>
  );
};

export default Gallery;
