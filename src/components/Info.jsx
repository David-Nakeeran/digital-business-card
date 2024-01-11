import profilPic from "../assets/profile-pic.png";
import mailIcon from "../assets/Mail.png";

export default function Info() {
    return (
        <>
            <img src={profilPic} alt="profile picture"></img>
            <div className="info-text">
                <h3 className="info-name">Laura Smith</h3>
                <p className="info-profession">Frontend Developer</p>
                <p className="info-email">laurasmith.website</p>
                <a href="mailto:laurasmith.website"><button className="button"><img src={mailIcon} alt="simple image of mail icon" className="email-icon"/>Email</button></a>
            </div>
        </>
    )
}