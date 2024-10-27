import "./manage_past_newsletter_tile.css";
import { ManagePastNewsletterTileProps } from "../../constants";


function ManagePastNewsletterTile({ newsletter, removeNewsletter, type }: ManagePastNewsletterTileProps) {
    return (
        <div className="manage-past-newsletter-tile">
            <h3>{newsletter.title}</h3>
            <p>{newsletter.date.toDateString()}</p>
            <p>{newsletter.body}</p>
            <button onClick={() =>{
                localStorage.setItem("newsletter", JSON.stringify(newsletter))
                window.open(window.location.origin + `/hc-youth/Newsletter/?path=1Dashboard1${type}1`, "_blank")
            }} >View</button>

            <button onClick={() => {
                //open newsletter.link in new tab
                removeNewsletter(newsletter.title);
            }}>Remove</button>
        </div>
    );
}

export default ManagePastNewsletterTile