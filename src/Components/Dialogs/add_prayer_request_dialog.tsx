import "./add_prayer_request_dialog.css";

import { AddPrayerRequestDialogProps } from "../../constants";
import { useState } from "react";
import { addPrayerRequest } from "../../Firebase/db";

function AddPrayerRequestDialog({onClose, dialogRef}: AddPrayerRequestDialogProps) {
    const [prayerRequest, setPrayerRequest] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <dialog ref={dialogRef} className="add-prayer-request-dialog">
            <div className="add-prayer-request-div">
                <h2>Add prayer request</h2>

                <input type="text" id="question" name="question" value={prayerRequest} onChange={(e) => {
                    setPrayerRequest(e.target.value);
                }}/>
                {loading ? <div className="loader"></div> : <button onClick={async() => {
                    setLoading(true);
                    await addPrayerRequest(prayerRequest);
                
                    onClose();
                }}>Submit</button>}
                <button onClick={onClose}>Cancel</button>    
            </div>
           
        </dialog>
    )
}

export default AddPrayerRequestDialog