import { WhereWhenSectionProps } from "../../constants";
import WhenSection from "./when_section";
import "./when_where_section.css";
import WhereSection from "./where_section";

function WhenWhereSection({type}: WhereWhenSectionProps) {
    return (
        <div className='when-where-section'>
          <WhenSection type={type}/>
          <WhereSection />
        </div>
    )
}

export default WhenWhereSection