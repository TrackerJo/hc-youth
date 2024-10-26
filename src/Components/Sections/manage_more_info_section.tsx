import "./manage_more_info_section.css";
import { ManageMoreInfoSectionProps, MoreInfo } from "../../constants";

import ManageMoreInfoTile from "../Tiles/manage_more_info_tile";
import { useEffect, useState } from "react";

function ManageMoreInfoSection({moreInfos, removeMoreInfo, updateMoreInfo, addMoreInfo}: ManageMoreInfoSectionProps) {
    const [currentMoreInfos, setCurrentMoreInfos] = useState< MoreInfo[]>([])

    useEffect(() => {
        setCurrentMoreInfos(moreInfos)
    }, [moreInfos])

    return (
        <div className="manage-more-info-section">
            <h2>Manage More Info</h2>
            <div className="more-info">
                {currentMoreInfos.map((info, index) => (
                    <ManageMoreInfoTile key={index} moreInfo={info} removeMoreInfo={removeMoreInfo} updateMoreInfo={updateMoreInfo} />
                ))}
            </div>
            <button onClick={() => {
                addMoreInfo()
            }}>Add more info</button>
        </div>
    );
}

export default ManageMoreInfoSection