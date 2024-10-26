import "./newsletter_tile.css";
import { NewsletterTileProps } from "../../constants";

function NewsletterTile({newsletter}: NewsletterTileProps){
    return (
        <div className='newsletter-tile'>
          <h3>{newsletter.title}</h3>
          <p>{newsletter.date.toDateString()}</p>
            <p>{newsletter.body}</p>
            <button onClick={() => {
                //open newsletter.link in new tab
                window.open(newsletter.link, "_blank")
            }}>View Newsletter</button>
        </div>
    )
}

export default NewsletterTile