import "./slideshow.css";
import { useEffect, useState } from "react";
import SlideOne from "../assets/slide_1.jpg";
import SlideTwo from "../assets/slide_2.png";
import SlideThree from "../assets/slide_3.png";


function Slideshow(){
    const [showBackUp, setShowBackUp] = useState(false);
    useEffect(() => {
        let slides = document.getElementsByClassName('carousel-item');

        function addActive(slide) {
            slide.classList.add('active');
        }

        function removeActive(slide) {
            slide.classList.remove('active');
        }

        addActive(slides[0]);
        let currentIndex = 0;

        setInterval(function () {
            // removeActive(slides[currentIndex]);
            // remove the active class from the two slides behind the current one
            // console.log((currentIndex - 1 + slides.length) % slides.length);
            if((currentIndex + 1) % slides.length === 0){
                setShowBackUp(true);
                removeActive(slides[slides.length - 1]);
            } else {
                setShowBackUp(false);
            }
            removeActive(slides[(currentIndex - 1 + slides.length) % slides.length]);
            
            
            currentIndex = (currentIndex + 1) % slides.length;


            addActive(slides[currentIndex]);

        }, 2000);

        // slides[currentIndex].addEventListener('transitionend', function () {
        //     removeActive(slides[(currentIndex - 1 + slides.length) % slides.length]);
        // });
    }, [])
   
    return (
        <div className="carousel">
            <div className={"carousel-item-backup " +(showBackUp ?"active" :"")}>
                <img className="slide-image" src={SlideThree}/>
                

            </div>
            <div className="carousel-item active">
                <img className="slide-image" src={SlideOne}/>
                

            </div>
            <div className="carousel-item">
                <img className="slide-image" src={SlideTwo}/>
                

            </div>
            <div className="carousel-item">
                <img className="slide-image" src={SlideThree}/>
                

            </div>
            
        </div>
    )

}

export default Slideshow;