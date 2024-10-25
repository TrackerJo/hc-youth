import "./more_info_section.css";
import { MoreInfoSectionProps } from "../../constants";
import MoreInfoTile from "../more_info_tile";


function MoreInfoSection({moreInfos} : MoreInfoSectionProps){
    return (
        <div className='more-info-section'>
          <h2>More Information</h2>
          <div className='more-info'>
            {moreInfos.map((info) => {
              return (
                <MoreInfoTile moreInfo={info} />
              )
            })}
          </div>
        </div>
    )
}

export default MoreInfoSection