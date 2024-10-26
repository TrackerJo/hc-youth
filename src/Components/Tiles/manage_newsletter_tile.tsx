import "./manage_newsletter_tile.css";

import { ManageNewsletterTileProps } from "../../constants";
import { useEffect, useRef, useState } from "react";
import { uploadNewsletterImage } from "../../Firebase/db";

function ManageNewsletterTile({newsletter, updateNewsletter, type}: ManageNewsletterTileProps) {
    const [currentNewsletter, setCurrentNewsletter] = useState(newsletter);
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(true);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [loadingSave, setLoadingSave] = useState(false);

    const uploadImageRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setCurrentNewsletter(newsletter);
    }, [newsletter]);
    return (
        <div className="manage-newsletter-tile">
            
            {currentNewsletter.image == "" ? <div className="info">
                <label htmlFor="">Title: </label>
                <input type="text" value={currentNewsletter.title} onChange={(e) => {
                    setNeedsUpdate(true);
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        title: e.target.value
                    });
                }} />
            </div> : <> <h3>{currentNewsletter.title}</h3>
            <img src={currentNewsletter.image} alt="" />
            </>}
            <div className="info">
                <label htmlFor="">Body: </label>
                <textarea value={currentNewsletter.body} onChange={(e) => {
                    setNeedsUpdate(true);
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        body: e.target.value
                    });
                }} />
            </div>
            <div className="info">
                <label htmlFor="">Date: </label>
                <input type="date" value={currentNewsletter.date.toISOString().slice(0, 10)} onChange={(e) => {
                    setNeedsUpdate(true);
                    const cdate = new Date(e.target.value)
                    cdate.setHours(0, 0, 0, 0)
                    cdate.setDate(cdate.getDate() + 1)
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        date: cdate
                    });
                }} />
            </div>
            <div className="Upload">
                <label htmlFor="">Image: </label>
                <input type="file" className="UploadImage" ref={uploadImageRef} onChange={() => {
                    setUploadedImage(false)
                }}/>
                {uploadedImage ? <></> : loadingUpload ? <div className="loader"></div> : <button onClick={async(e) => {
                    if(currentNewsletter.title === "") {
                        alert("Please enter a title")
                        return
                    }
                    setLoadingUpload(true)
                    setNeedsUpdate(true)

                    const url = await uploadNewsletterImage(type,uploadImageRef.current!.files![0], currentNewsletter.title);
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        image: url
                    })
                    alert("Image uploaded")
                    setUploadedImage(true)
                    setLoadingUpload(false)


                }}>Upload</button>}
            </div>
            {needsUpdate && <button onClick={() => {

                updateNewsletter(currentNewsletter);
                alert("Newsletter updated")
                setNeedsUpdate(false);
            }}>Save</button>}



            
        </div>
    )
}

export default ManageNewsletterTile