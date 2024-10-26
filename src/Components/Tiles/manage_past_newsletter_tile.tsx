import "./manage_past_newsletter_tile.css";
import { ManagePastNewsletterTileProps } from "../../constants";


function ManagePastNewsletterTile({ newsletter, removeNewsletter }: ManagePastNewsletterTileProps) {
    return (
        <div className="manage-past-newsletter-tile">
            <h3>{newsletter.title}</h3>
            <p>{newsletter.date.toDateString()}</p>
            <p>{newsletter.body}</p>

            <button onClick={() => {
                //open newsletter.link in new tab
                removeNewsletter(newsletter.title);
            }}>Remove</button>
        </div>
    );
}

export default ManagePastNewsletterTile