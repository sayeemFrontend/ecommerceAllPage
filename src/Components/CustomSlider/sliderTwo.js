import { useEffect, useRef, useState } from "react";
import "./sliderTwo.css"
import pic01 from "./Asset/pic01.jpg";
import pic03 from "./Asset/pic03.jpg";
import pic02 from "./Asset/pic02.jpg";
import View from "./view";

export default function SliderTwo() {
    const slideContainerRef = useRef()
    // let slideNumber = 3
    let imgList = [pic01, pic02, pic03, pic02, pic01, pic03]
    const [index, updateIndex] = useState(1)
    const [thumb, setThumb] = useState()


    useEffect(() => {
        const slides = Array.from(slideContainerRef.current.children)
        slides.forEach((e) => {
            e.className = "slide";
        })
        slides[(index - 1) % (slides.length)].className = "slide visited"
        slides[index % (slides.length)].className = "slide active"

    }, [index])


    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            updateIndex(index + 1)
        }, 3000)

        return function () {
            clearTimeout(slideTimeout)
        }
    }, [index])


    useEffect(() => {
        if ((index % imgList.length) > 0 && (index % imgList.length) < imgList.length) {
            setThumb(index % imgList.length)
        }
        else (
            setThumb(0)
        )


    }, [index])

    // console.log("text=", index);

    return (
        <div className="sliderContainer">
            <div className="slideContainer" ref={slideContainerRef}>
                <View imgList={imgList} />
            </div>
            <div className="thumbContainer">
                <img src={imgList[thumb - 1]} alt="" />
                <img src={imgList[thumb]} alt="" />
                <img src={imgList[thumb + 1]} alt="" />
            </div>

        </div>


    );
}