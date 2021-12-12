import "./slider.css"
import Slider from "react-slick";
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " arrowIcon"}
            onClick={onClick}
        >
            <i class="fas fa-angle-right"></i>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " arrowIcon"}
            onClick={onClick}
        >
            <i class="fas fa-angle-left"></i>
        </div>
    );
}



export default function SimpleSlider() {

    const images = [pic01, pic02, pic03, pic01];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: function (i) {
            return (
                <a href="/" className="smallImage">
                    <img src={images[i]} alt={i} />
                </a>
            )
        }

    };
    return (
        <div className="reactSlideContainer">

            <Slider {...settings}>
                {images.map(image => (
                    <div>
                        <img src={image} alt="pic01" />
                    </div>

                ))}

            </Slider>
        </div>

    );
}
