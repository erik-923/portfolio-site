import '../css/header.css';
import headshot from '../assets/headshot.png';

function Header() {
    return (
        <div className="header-container flex-horizontal">
            <div className="profile-section flex-horizontal">
                <div className="circular-container">
                    <img src={headshot} className="profile-pic"/>
                </div>
                <div className="profile-text">
                    Erik Blix
                </div>
            </div>
            <div className="flex-horizontal header-links">
                <div className="header-link flex-horizontal">
                    Home
                </div>
                <div className="header-link">
                    About
                </div>
                <div className="header-link">
                    Resume
                </div>
                <div className="header-link">
                    Projects
                </div>
                <div className="header-link">
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Header;