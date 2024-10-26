import "./manage_team_section.css";
import { ManageTeamSectionProps } from "../../constants";

import ManageTeamTile from "../Tiles/manage_team_member_tile";

function ManageTeamSection({teamMembers, removeTeamMember, updateTeamMember, addTeamMember, type}: ManageTeamSectionProps) {
    return (
        <div className="manage-team-section">
            <h2>Manage Team</h2>
            <div className="team">
                {teamMembers.map((member, index) => (
                    <ManageTeamTile key={index} type={type} teamMember={member} removeTeamMember={removeTeamMember} updateTeamMember={updateTeamMember} />
                ))}
            </div>
            <button onClick={() => {
                addTeamMember()
            }}>Add team member</button>
        </div>
    );
}

export default ManageTeamSection