import "../styles/helpful-info.css";
import slide1 from "../images/slide-image1.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {RxDividerVertical} from "react-icons/rx";
import {useState} from 'react';
import HelpfulInfo from "./helpful-information";

export default function Infoslides() {
    const [slide,setSlide]=useState(0);
    function handleClickprev(){
   if(slide===0){
    setSlide(2);
   }else{
setSlide(slide-1);
   }
   
    }
    function handleClicknext(){
        if(slide===2){
            setSlide(0);
        }else{
            setSlide(slide+1);
        }
    }
  return (
    <>
      <div className="info-slides">
        {slide == 0 ? <HelpfulInfo /> : ""}
        <div className="slide-button d-flex">
          <div onClick={handleClickprev} className="mx-2">
            <AiOutlineArrowLeft />
          </div>
          <div className="mx-2">
            <RxDividerVertical />
          </div>
          <div onClick={handleClicknext} className="mx-2">
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}


