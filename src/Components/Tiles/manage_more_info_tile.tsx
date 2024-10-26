import "./manage_more_info_tile.css";

import { ManageMoreInfoTileProps } from "../../constants";
import { useEffect, useState } from "react";

function ManageMoreInfoTile({moreInfo, removeMoreInfo, updateMoreInfo}: ManageMoreInfoTileProps){
    const [title, setTitle] = useState(moreInfo.title);
    const [body, setBody] = useState(moreInfo.body);
    const [link, setLink] = useState(moreInfo.link);
    const [needsUpdate, setNeedsUpdate] = useState(false);

    useEffect(() => {
        setTitle(moreInfo.title);
        setBody(moreInfo.body);
        setLink(moreInfo.link);
    }, [moreInfo])
    return (
        <div className='manage-more-info-tile'>
            <div className="info">
                <label htmlFor="">Title: </label>
                <input value={title} onChange={(e) => {
                    setTitle(e.target.value)
                    setNeedsUpdate(true)
                }} />
            </div>
            <div className="info">
                <label htmlFor="">Body: </label>
                <textarea value={body} onChange={(e) => {
                    setBody(e.target.value)
                    setNeedsUpdate(true)
                }} />
            </div>
            <div className="info">
                <label htmlFor="">Link: </label>
                <input value={link} onChange={(e) => {setLink(e.target.value)
                    setNeedsUpdate(true)
                }} />
            </div>
           
            {needsUpdate && <button onClick={() => {
                
                updateMoreInfo(moreInfo.title,title, body, link)
                alert("More Info Updated")
                setNeedsUpdate(false)
                }}>Update</button>}
            <button onClick={() => removeMoreInfo(moreInfo.title)}>Remove</button>
        </div>
    )
}

export default ManageMoreInfoTile