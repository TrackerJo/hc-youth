import "./newsletter_tile.css";
import { NewsletterTileProps } from "../../constants";

function NewsletterTile({newsletter, type}: NewsletterTileProps){
    return (
        <div className='newsletter-tile'>
          <h3>{newsletter.title}</h3>
          <p>{newsletter.date.toDateString()}</p>
            <button onClick={() => {
                //open newsletter.link in new tab
                localStorage.setItem("newsletter", JSON.stringify(newsletter))
                console.log(window.location)
                window.open(window.location.origin + `/hc-youth/Newsletter/?path=1${type}1`, "_blank")
            }}>View Newsletter</button>
        </div>
    )
}

export default NewsletterTile