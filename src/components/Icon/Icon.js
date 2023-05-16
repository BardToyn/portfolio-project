import "./style.css";

import gt from "../../img/icon/github.svg";
import gm from "../../img/icon/gmail.svg";
import tg from "../../img/icon/tg.svg";

function Icon () {
    return (
        <div className="icon-wrapper">
            <a href="#" className="icon-link">
                <img src={gt} alt="github" className="icon-img" />
            </a>
            <a href="#" className="icon-link">
                <img src={gm} alt="gmail" className="icon-img" />
            </a>
            <a href="#" className="icon-link">
                <img src={tg} alt="telegram" className="icon-img" />
            </a>
        </div>
    )
}
 
export default Icon;