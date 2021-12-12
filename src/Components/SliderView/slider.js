import styled from "./slider.module.css"
import { useEffect, useState } from "react"

/*
imgList=["url","url"]
styles={
    width:100px, //slide content width & height
    height:100px, 
}
slideDisplay=3 //number
onClicked= fn() for clicked on img
*/

const Slider = ({ imgList, styles, slideDisplay, activeImg, setActiveImg }) => {
    const showItemsNumber = slideDisplay
    const [pointer, setPointer] = useState(0)
    const [startIndex, setStartIndex] = useState(0)
    const [disPlaySlides, updateDisplaySlides] = useState(imgList.slice(startIndex, startIndex + showItemsNumber))
    const [width, updateWidth] = useState(window.innerWidth)
    const [disableNext, setDisableNext] = useState(false)
    const [disablePrev, setDisablePrev] = useState(true)
    const [track, setTrack] = useState(null)

    useEffect(() => {
        setActiveImg(imgList[pointer])
        if (track === "next") {
            if (!disPlaySlides.includes(imgList[pointer])) {
                setStartIndex(startIndex + 1)
            }
        }

        if (track === "prev") {
            if (!disPlaySlides.includes(imgList[pointer])) {
                setStartIndex(startIndex - 1)
            }

        }


        if (pointer === 0) {
            setDisablePrev(true)
        }
        else {
            setDisablePrev(false)
        }
        if (pointer === (imgList.length - 1)) {
            setDisableNext(true)
        }
        else {
            setDisableNext(false)
        }

    }, [pointer])

    useEffect(() => {
        let arr = imgList.slice(startIndex, startIndex + showItemsNumber)
        updateDisplaySlides(arr)
    }, [updateDisplaySlides, startIndex])

    console.log("poiter", pointer, "start=", startIndex, "end", startIndex + showItemsNumber);

    window.addEventListener("resize", () => {
        updateWidth(window.innerWidth)
    })
    const contentStyle = {
        width: `${(width / showItemsNumber) - (15 * showItemsNumber)}px`,
        height: "200px"
    }

    const nextSlideHandle = () => {
        setTrack("next")
        if (pointer < imgList.length - 1) {
            setDisableNext(false)
            setPointer(pointer + 1)
        }
    }

    const prevSlideHandle = () => {
        setTrack("prev")
        if (pointer > 0) {
            setDisablePrev(false)
            setPointer(pointer - 1)
        }


    }



    const returnClass = (slide) => {
        if (slide === activeImg)
            return styled.content + " " + styled.slideActive
        else return styled.content
    }

    return (
        <div className={styled.sliderContainer}>
            <div onClick={prevSlideHandle} className={disablePrev ? styled.disablePrev : styled.prevSlide}>
                <i class="fas fa-chevron-circle-left"></i>
            </div>

            {disPlaySlides?.map((slide) => (
                <div className={styled.slide}>
                    <div style={styles ? styles : contentStyle} className={returnClass(slide)} ><img onClick={() => setPointer(imgList.indexOf(slide))} src={slide} alt="" /></div>
                </div>
            ))}

            <div onClick={nextSlideHandle} className={disableNext ? styled.disableNext : styled.nextSlide}>
                <i class="fas fa-chevron-circle-right"></i>
            </div>

        </div>
    );
}

export default Slider;