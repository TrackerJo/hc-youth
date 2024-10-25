import { PrayerRequestSectionProps } from "../../constants";
import PrayerRequestTile from "../prayer_request_tile";
import "./prayers_section.css";

function PrayersSection({requests}: PrayerRequestSectionProps) {
    return (
        <div className='prayers-section'>
            <h2>Prayers</h2>
            {requests.map((prayerRequest) => {
              

              return (
              <PrayerRequestTile request={prayerRequest} top={prayerRequest.top} left={prayerRequest.left} />
              )
            })}

            

        </div>
    )
}

export default PrayersSection