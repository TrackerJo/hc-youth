import "./past_newsletters_section.css";

import { PastNewslettersSectionProps } from "../../constants";
import NewsletterTile from "../Tiles/newsletter_tile";


function PastNewslettersSection({newsletters} : PastNewslettersSectionProps){
    return (
        <div className='past-newsletters-section' id="past-newsletters">
          <h2>Past Newsletters</h2>
          <div className='newsletters'>
            {newsletters.map((newsletter) => {
              return (
                <NewsletterTile newsletter={newsletter} />
              )
            })}
          </div>
        </div>
    )
}

export default PastNewslettersSection