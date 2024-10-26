import { WhereWhenSectionProps } from "../../constants";
import WhenSection from "./when_section";
import "./when_where_section.css";
import WhereSection from "./where_section";

function WhenWhereSection({type, middleSchoolTiming, highSchoolTiming, youngAdultsTiming}: WhereWhenSectionProps) {
    return (
        <div className='when-where-section' id="when-where">
          <WhenSection type={type} middleSchoolTiming={middleSchoolTiming} highSchoolTiming={highSchoolTiming} youngAdultsTiming={youngAdultsTiming}/>
          <WhereSection />
        </div>
    )
}

export default WhenWhereSection