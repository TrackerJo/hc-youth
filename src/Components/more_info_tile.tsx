import "./more_info_tile.css";
import { MoreInfoTileProps } from "../constants";

function MoreInfoTile({moreInfo} : MoreInfoTileProps){
    return (
        <div className='more-info-tile'>
            <h3>{moreInfo.title}</h3>
            <p>{moreInfo.body}</p>
            <button onClick={() => {
                //open moreInfo.link in new tab
                window.open(moreInfo.link, "_blank")
            }}>Open Link</button>
        </div>
    )
}

export default MoreInfoTile