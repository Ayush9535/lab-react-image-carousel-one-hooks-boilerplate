import "./Carousel.css";
import { images } from "../data/CarouselData";
import { useState } from "react";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [currIndex , setIndex] = useState(0);

    let handlePrev = () => {
        setIndex(
           currIndex > 0 ? currIndex - 1 : images.length-1 
        )
    }

    let handleNext = () => {
        setIndex(
             currIndex < images.length-1 ? currIndex + 1 : 0 
        )
    }

    return (
        <>
            <div className="main-container">
                    <div className="arrows"  onClick={handlePrev}>
                        <ArrowBackIosIcon/>
                    </div>

                    <div className="image-box">
                        <img src={images[currIndex].img} className="img"/>
                    </div>      

                    <div className="image-container">
                        <div className="title-box box">
                            {images[currIndex].title}
                        </div>
                        <div className="subtitle-box box">
                            {images[currIndex].subtitle}
                        </div>
                    </div>

                    <div className="arrows"  onClick={handleNext}>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
        </>
    )
}

export default Carousel;