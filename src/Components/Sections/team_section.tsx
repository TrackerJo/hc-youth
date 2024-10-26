import "./team_section.css";

import { TeamSectionProps } from "../../constants";

import TeamMemberTile from "../Tiles/team_member_tile";

function TeamSection({teamMembers} : TeamSectionProps){
    return (
        <div className='team-section' id="team">
          <h2>Meet the Team</h2>
          <div className='team'>
            {teamMembers.map((teamMember) => {
              return (
                <TeamMemberTile teamMember={teamMember} />
              )
            })}
          </div>
        </div>
    )
}

export default TeamSection