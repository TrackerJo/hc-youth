import "./manage_prayer_request_tile.css";

import { ManagePrayerRequestTileProps } from "../../constants";

import TrashIcon from "../../assets/trash_icon.png";
import { deletePrayerRequest } from "../../Firebase/db";

function ManagePrayerRequestTile({ request, removeRequest }: ManagePrayerRequestTileProps) {
    return (
        <div className="prayer-request-tile">
            <h3 htmlFor="">{request.request}</h3>
            <img src={TrashIcon} alt=""  onClick={async () => {
                removeRequest(request.request);
                await deletePrayerRequest(request.request);
                
            }}/>
        </div>
    );
}

export default ManagePrayerRequestTile;