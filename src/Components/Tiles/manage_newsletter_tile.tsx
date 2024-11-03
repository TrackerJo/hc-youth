import "./manage_newsletter_tile.css";

import { ManageNewsletterTileProps } from "../../constants";
import { useEffect, useRef, useState } from "react";
import { deleteNewsletterImage, uploadNewsletterImage } from "../../Firebase/db";

function ManageNewsletterTile({newsletter, updateNewsletter, type}: ManageNewsletterTileProps) {
    const [currentNewsletter, setCurrentNewsletter] = useState(newsletter);
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(true);
    const [loadingUpload, setLoadingUpload] = useState(false);


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
            {currentNewsletter.images.length == 0 ? <></> : <> 
                <div className="newsletter-images">
                    {currentNewsletter.images.map((image, index) => {
                        return <div className="image-container" key={index}>
                            <img src={image.url} alt="" />
                            <button onClick={async() => {
                                const images = currentNewsletter.images.filter((img, i) => i != index);
                                deleteNewsletterImage(type, image);
                                setCurrentNewsletter({
                                    ...currentNewsletter,
                                    images: images
                                });
                                updateNewsletter({
                                    ...currentNewsletter,
                                    images: images
                                });
                            }}>Remove</button>
                        </div>
                    })}
                </div>
            </>}
            <div className="Upload">
                <label htmlFor="">Image: </label>
                <input type="file" className="UploadImage" ref={uploadImageRef} onChange={() => {
                    setUploadedImage(false)
                }}/>
                {uploadedImage ? <>
                  
                </> : loadingUpload ? <div className="loader"></div> : <button onClick={async() => {
                    setLoadingUpload(true)
                    //Genereate a unique name for the image using title and milliseconds
                    //replace spaces with underscores

                    const name = currentNewsletter.title.replace(/ /g, "_") + Date.now().toString();
                    

                    const url = await uploadNewsletterImage(type,uploadImageRef.current!.files![0], name);
                    const images = currentNewsletter.images;
                    images.push({
                        id: name,
                        url: url
                    });
                    setCurrentNewsletter({
                        ...currentNewsletter,
                        images: images,

                    })
                    updateNewsletter({
                        ...currentNewsletter,
                        images: images,

                    });
                    setNeedsUpdate(false);
                    alert("Image uploaded")
                    uploadImageRef.current!.value = "";

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