import { ManagePrayerRequestSectionProps } from "../../constants";
import ManagePrayerRequestTile from "../Tiles/manage_prayer_request_tile";
import "./manage_prayer_requests_section.css";




function ManagePrayerRequestsSection({requests, removeRequest}: ManagePrayerRequestSectionProps) {


    return (
        <div className="manage-prayer-requests-section">
            <h2>Manage Prayer Requests</h2>
            <div className="prayer-requests">
                {requests.map((request, index) => (
                    <ManagePrayerRequestTile key={index} request={request} removeRequest={removeRequest} />
                ))}
            </div>
        </div>
    );
}

export default ManagePrayerRequestsSection;