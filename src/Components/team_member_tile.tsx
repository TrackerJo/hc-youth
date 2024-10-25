import "./team_member_tile.css";
import { TeamMemberTileProps } from "../constants";
import Loesel from "../assets/loesel.png";
import Slide1 from "../assets/slide_1.jpg";



function TeamMemberTile({teamMember} : TeamMemberTileProps){
    return (
        <div className='team-member-tile'>
            <img src={teamMember.image} alt={teamMember.name} />
            <h3>{teamMember.name}</h3>
            <h4>{teamMember.role}</h4>
            <p>{teamMember.bio}</p>
            {/* add phone and email if not null */}
            {teamMember.phone && <p>Phone Number: {teamMember.phone}</p>}
            {teamMember.email && <p>Email: {teamMember.email}</p>}
        </div>
    )
}

export default TeamMemberTile