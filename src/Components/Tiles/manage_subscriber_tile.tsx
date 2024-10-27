import "./manage_subscriber_tile.css";
import { ManageSubscriberTileProps } from "../../constants";

import TrashIcon from "../../assets/trash_icon.png";

function ManageSubscriberTile({subscriber, removeSubscriber}: ManageSubscriberTileProps) {
    return (
        <div className="manage-subscriber-tile">
            <h3 className="subscriber">{subscriber}</h3>
            <img src={TrashIcon} alt="" onClick={async () => {
                removeSubscriber(subscriber);
            }}/>
        </div>
    );
}

export default ManageSubscriberTile;