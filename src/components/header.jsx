import '../css/header.css';
import headshot from '../assets/headshot.png';

function Header() {

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            if (sectionId === "home-container") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

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
                <div className="header-link flex-horizontal" onClick={() => scrollToSection('home-container')}>
                    Home
                </div>
                <div className="header-link" onClick={() => scrollToSection('about-container')}>
                    About
                </div>
                <div className="header-link" onClick={() => scrollToSection('projects-container')}>
                    Projects
                </div>
                <div className="header-link" onClick={() => scrollToSection('contact-card')}>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Header;