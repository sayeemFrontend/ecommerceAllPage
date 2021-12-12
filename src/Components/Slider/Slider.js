import React from "react";
import classes from "./Slider.module.css";
import Cover from "./Asset/cover.png";

const Slider = () => {
    return (
        <div className="my-0 my-md-5 container" >
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                {/* carousel-indicators */}

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} aria-current="true" aria-label="Slide 1">
                    </button>

                    <button type="button" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
                    </button>

                    <button type="button" style={{ height: "10px", width: "10px", backgroundColor: "#000000", borderRadius: "100%" }} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
                    </button>
                </div>

                {/* carousel-items */}

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Cover} className={`d-block w-100 ${classes.sliderImage}`} alt="Cover" />
                        <div className={`carousel-caption  ${classes.caption}`}>
                            <p className={`fw-500 fs-14 cBlack-1 ${classes.title1}`}>New Product</p>
                            <h1 className="fw-600 fs-20 cBlack-1 my-3">Family Pack</h1>
                            <h1 className="fw-600 fs-20 cBlack-1">Fruits</h1>
                            <button className={`fw-500 fs-16 bgPrimary-1 cBlack-9  py-2 px-3 mt-2 ${classes.productTotal}`}>
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={Cover} className={`d-block w-100 ${classes.sliderImage}`} alt="Cover" />
                        <div className={`carousel-caption  ${classes.caption}`}>
                            <p className={`fw-500 fs-14 cBlack-1 ${classes.title1}`}>New Product</p>
                            <h1 className="fw-600 fs-20 cBlack-1 my-3">Family Pack</h1>
                            <h1 className="fw-600 fs-20 cBlack-1">Fruits</h1>
                            <button className={`fw-500 fs-16 bgPrimary-1 cBlack-9  py-2 px-3 mt-2 ${classes.productTotal}`}>
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={Cover} className={`d-block w-100 ${classes.sliderImage}`} alt="Cover" />
                        <div className={`carousel-caption  ${classes.caption}`}>
                            <p className={`fw-500 fs-14 cBlack-1 ${classes.title1}`}>New Product</p>
                            <h1 className="fw-600 fs-20 cBlack-1 my-3">Family Pack</h1>
                            <h1 className="fw-600 fs-20 cBlack-1">Fruits</h1>
                            <button className={`fw-500 fs-16 bgPrimary-1 cBlack-9  py-2 px-3 mt-2 ${classes.productTotal}`}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* carousel-control-button */}

                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className={classes.arrowBg + " carousel-control-prev-icon"} style={{ color: "black" }} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className={classes.arrowBg + " carousel-control-next-icon"} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );

};

export default Slider;
