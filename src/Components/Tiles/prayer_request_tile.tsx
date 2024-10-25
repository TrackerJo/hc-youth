
import "./prayer_request_tile.css";
import { PrayerRequestTileProps } from "../../constants";

function PrayerRequestTile({request, top, left}: PrayerRequestTileProps) {
   
    return (
        <div id={"prayer-request-tile-" + request.id} className={"prayer-request-tile " + (request.visible ? "active" : "inactive")} style={{top: top + "px", left: left + "%"}} >
            <h3>{request.request}</h3>
        </div>
    )
}

export default PrayerRequestTile