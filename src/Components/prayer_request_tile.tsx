import { useEffect, useRef, useState } from "react";
import "./prayer_request_tile.css";
import { PrayerRequestTileProps } from "../constants";

function PrayerRequestTile({request, top, left}: PrayerRequestTileProps) {
    const [ttop, setTop] = useState(0);
    const [tleft, setLeft] = useState(0);
    const tileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      


        //Ensure that the tile is not off the screen

        if(tileRef.current){
            if(tileRef.current.getBoundingClientRect().right > window.innerWidth){
                setLeft(80 - tileRef.current.getBoundingClientRect().width / window.innerWidth * 100)
            }
            if(tileRef.current.getBoundingClientRect().bottom > window.innerHeight){
                setTop(80 - tileRef.current.getBoundingClientRect().height / window.innerHeight * 100)
            }
        }
    }, [])
    return (
        <div id={"prayer-request-tile-" + request.id} className={"prayer-request-tile " + (request.visible ? "active" : "inactive")} style={{top: top + "px", left: left + "%"}} ref={tileRef}>
            <h3>{request.request}</h3>
        </div>
    )
}

export default PrayerRequestTile