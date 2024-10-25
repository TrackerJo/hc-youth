import { useRef } from "react";
import { PrayerRequestSectionProps } from "../../constants";
import AddPrayerRequestDialog from "../Dialogs/add_prayer_request_dialog";
import PrayerRequestTile from "../Tiles/prayer_request_tile";
import "./prayers_section.css";

function PrayersSection({requests}: PrayerRequestSectionProps) {
    const addPrayerRequestRef = useRef<HTMLDialogElement>(null)
    return (
        <>
            <div className='prayers-section'>
                <h2>Prayers</h2>
                <div className="left">

                </div>
                <div className="middle">

                </div>
                <div className="right">

                </div>
                {requests.map((prayerRequest) => {
                

                return (
                <PrayerRequestTile request={prayerRequest} top={prayerRequest.top} left={prayerRequest.left} />
                )
                })}
                <button onClick={() => {
                    addPrayerRequestRef.current?.showModal()
                }}>
                    Add a prayer request
                </button>

                

            </div>
            <AddPrayerRequestDialog dialogRef={addPrayerRequestRef} onClose={() => { addPrayerRequestRef.current?.close() }} />
        </>
    )
}

export default PrayersSection