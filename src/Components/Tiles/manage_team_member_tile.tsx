import "./manage_team_member_tile.css";
import { ManageTeamMemberTileProps } from "../../constants";
import { uploadTeamMemberImage } from "../../Firebase/db";
import { useEffect, useRef, useState } from "react";

function ManageTeamMemberTile({teamMember, removeTeamMember, updateTeamMember, type}: ManageTeamMemberTileProps) {
    const [currentTeamMember, setCurrentTeamMember] = useState(teamMember);
    const uploadImageRef = useRef<HTMLInputElement>(null);
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(true);
    const [firstUpdate, setFirstUpdate] = useState(true);
    const [loadingUpload, setLoadingUpload] = useState(false);

    useEffect(() => {
        setCurrentTeamMember(teamMember)
    }, [teamMember])

    return (
        <div className="manage-team-tile">
            {currentTeamMember.image !== "" && <img src={currentTeamMember.image} alt={currentTeamMember.name} />}

           <div className="info">
            <label htmlFor="">Name: </label>
            <input type="text" value={currentTeamMember.name} onChange={(e) => {
                setNeedsUpdate(true)
                setCurrentTeamMember({
                    ...currentTeamMember,
                    name: e.target.value
                })
            }} />

           </div>
           

            <div className="info">
                <label htmlFor="">Role: </label>
                <input type="text" value={currentTeamMember.role} onChange={(e) => {
                    setNeedsUpdate(true)
                    setCurrentTeamMember({
                        ...currentTeamMember,
                        role: e.target.value
                    })
                }} />
            </div>
          <div className="info">
            <label htmlFor="">Bio: </label>
            <textarea value={currentTeamMember.bio} onChange={(e) => {
                setNeedsUpdate(true)
                setCurrentTeamMember({
                    ...currentTeamMember,
                    bio: e.target.value
                })
            }} />
          </div>
            
           <div className="info">
            <label htmlFor="">Email: </label>
            <input type="text" value={currentTeamMember.email} onChange={(e) => {
                setNeedsUpdate(true)
                setCurrentTeamMember({
                    ...currentTeamMember,
                    email: e.target.value
                })
            }} />
           </div>
            <div className="info">
                <label htmlFor="">Phone: </label>
                <input type="text" value={currentTeamMember.phone} onChange={(e) => {
                    setNeedsUpdate(true)
                    setCurrentTeamMember({
                        ...currentTeamMember,
                        phone: e.target.value
                    })
                }} />
            </div>
            <div className="Upload">
                <input type="file" className="UploadImage" ref={uploadImageRef} onChange={() => {
                    setUploadedImage(false)
                }}/>
                {loadingUpload ? <div className="loader" /> :  !uploadedImage && <button onClick={async(e) => {
                    if(currentTeamMember.name === "") {
                        alert("Please enter a name")
                        return
                    }
                    setLoadingUpload(true)
                    //replace spaces with underscores regex

                    const id = currentTeamMember.name.replace(/ /g, "_") + Date.now()
                    const url = await uploadTeamMemberImage(type,uploadImageRef.current!.files![0], id);
                    setCurrentTeamMember({
                        ...currentTeamMember,
                        image: url,
                        imageId: id
                    })
                    alert("Image uploaded")
                    updateTeamMember(teamMember.name, {
                        ...currentTeamMember,
                        image: url,
                        imageId: id
                    }, firstUpdate)
                    setFirstUpdate(false)
                    setUploadedImage(true)
                    setNeedsUpdate(false)

                    setLoadingUpload(false)

                }}>Upload</button>}
            </div>
            

           {needsUpdate && <button onClick={() => {
                setNeedsUpdate(false)
                updateTeamMember(teamMember.name, currentTeamMember, firstUpdate)
                setFirstUpdate(false)
                alert("Team Member Updated")

            }}>Save</button>}



            

            <button onClick={() => {
                removeTeamMember(teamMember.name)
            }}>Remove</button>
        </div>
    )
}

export default ManageTeamMemberTile