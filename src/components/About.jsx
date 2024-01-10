import profilPic from "../assets/profile-pic.png";
import mailIcon from "../assets/Mail.png";

export default function About() {
    return (
        <>
            <img src={profilPic} alt="profile picture"></img>
            <div>
                <h3>Laura Smith</h3>
                <p>Frontend Developer</p>
                <p>laurasmith.website</p>
                <a href="mailto:laurasmith.website"><button className="button"><img src={mailIcon} alt="simple image of mail icon"/>Email</button></a>
            </div>
        </>
    )
}