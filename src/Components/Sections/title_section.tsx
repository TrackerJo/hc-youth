import { TitleSectionProps } from "../../constants";
import Slideshow from "../slideshow";
import "./title_section.css";

function TitleSection({title, description}: TitleSectionProps) {
    return (
        <div className='title-section'>
          
          <div className='title-div'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <Slideshow />
        </div>
    )
}

export default TitleSection