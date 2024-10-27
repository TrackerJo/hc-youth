import "./manage_newsletter_tile.css";

import { ManageNewsletterTileProps } from "../../constants";
import { useEffect, useRef, useState } from "react";
import { deleteNewsletterImage, uploadNewsletterImage } from "../../Firebase/db";

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
            <div className="info">
                <label htmlFor="">Title: </label>
                <input type="text" value={currentNewsletter.title} onChange={(e) => {
                    setNeedsUpdate(true);
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        title: e.target.value
                    });
                }} />
            </div>
            {currentNewsletter.image == "" ? <></> : <> 
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
            {/* <div className="info">
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
            </div> */}
            <div className="Upload">
                <label htmlFor="">Image: </label>
                <input type="file" className="UploadImage" ref={uploadImageRef} onChange={() => {
                    setUploadedImage(false)
                }}/>
                {uploadedImage ? <>
                   {currentNewsletter.image != "" && <button onClick={async () => {
                        setUploadedImage(false);
                        await deleteNewsletterImage(type, currentNewsletter)
                        setCurrentNewsletter({
                            ...currentNewsletter,
                            image: "",
                            imageId: ""
                        });
                        updateNewsletter({
                            ...currentNewsletter,
                            image: "",
                            imageId: ""
                        });
                    }}>Delete</button>}
                </> : loadingUpload ? <div className="loader"></div> : <button onClick={async(e) => {
                   
                    setLoadingUpload(true)
                    //Genereate a unique name for the image using title and milliseconds
                    //replace spaces with underscores

                    const name = currentNewsletter.title.replace(/ /g, "_") + Date.now().toString();
                    //check if other images are uploaded
                    if(currentNewsletter.image != ""){
                        //delete the old image
                        //deleteImage(currentNewsletter.image)
                       await deleteNewsletterImage(type, currentNewsletter)
                    }

                    const url = await uploadNewsletterImage(type,uploadImageRef.current!.files![0], name);
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        image: url,
                        imageId: name
                    })
                    updateNewsletter({
                        ...currentNewsletter,
                        image: url,
                        imageId: name
                    });
                    setNeedsUpdate(false);
                    alert("Image uploaded")
                    setUploadedImage(true)
                    setLoadingUpload(false)


                }}>Upload</button> }
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