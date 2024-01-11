import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import linkedenIcon from "../assets/linkeden-icon.png";
import githubIcon from "../assets/github-icon.png";


export default function Footer() {
    return (
    <div className="icons">
        <img src={twitterIcon} alt="twitter icon"></img>
        <img src={facebookIcon} alt="facebook icon"></img>
        <img src={instagramIcon} alt="instagram icon"></img>
        <img src={linkedenIcon} alt="linkeden icon"></img>
        <img src={githubIcon} alt="github icon"></img>
    </div>
    )
}