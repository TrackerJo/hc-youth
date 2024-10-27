import { ManageNewsletterSectionProps } from "../../constants";
import ManageNewsletterTile from "../Tiles/manage_newsletter_tile";
import ManagePastNewsletterTile from "../Tiles/manage_past_newsletter_tile";
import ManageSubscriberTile from "../Tiles/manage_subscriber_tile";
import "./manage_newsletter_section.css";



function ManageNewsletterSection({newsletter, updateNewsletter, type, subscribers, removeSubscriber, pastNewsletters, removeNewsletter}: ManageNewsletterSectionProps) {
    return (
        <div className="manage-newsletter-section">
            <h2>Manage Newsletter</h2>
            <div className="columns">
                <div className="subscribers">
                    <h3>Subscribers</h3>
                    <div className="subscribers-list">
                        {subscribers.map((subscriber, index) => (
                            <ManageSubscriberTile key={index} subscriber={subscriber} removeSubscriber={removeSubscriber} />
                        ))}
                    </div>

                </div>
                <div className="current-newsletter">
                    <h3>Current Newsletter</h3>
                    <ManageNewsletterTile type={type} newsletter={newsletter} updateNewsletter={updateNewsletter} />
                </div>
                
                <div className="past-newsletters">
                    <h3>Past Newsletters</h3>
                    <div className="past-newsletters-list">
                        {pastNewsletters.map((pastNewsletter, index) => (
                            <ManagePastNewsletterTile key={index} newsletter={pastNewsletter} removeNewsletter={removeNewsletter} type={type} />
                        ))}
                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default ManageNewsletterSection