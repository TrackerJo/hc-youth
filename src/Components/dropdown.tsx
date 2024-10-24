import { DropdownProps } from "../constants";
import "./dropdown.css";

function Dropdown({title, links, onClick}: DropdownProps) {
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => {onClick()}}>{title}</button>
            <div className="dropdown-content">
              {links.map((link, index) => (
                <a key={index} onClick={link.onClick}>{link.title}</a>
                ))}
            </div>
        </div>
    )
}

export default Dropdown