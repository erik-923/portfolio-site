import '../css/home.css';
import Typed from 'react-typed';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

function Home() {
    return (
        <div className="home-container flex-horizontal">
            <div className="flex-vertical fill-space center-items">
                <div className="home-text flex-vertical center-items">
                    <div className="home-name center-items">
                        Erik Blix
                    </div>
                    <div className="home-quote center-items">
                        I am&nbsp;
                        <Typed 
                            strings={[
                                'a computer science student.',
                                'a statistics student.',
                                'interested in software engineering.',
                                'passionate about data science.'
                            ]}
                            typeSpeed={75}
                            backSpeed={50}
                            backDelay={1000}
                            loop
                            />
                    </div>
                    <div className="links-container flex-horizontal center-items">
                        <a href="https://github.com/erik-923" target="_blank" rel="noopener noreferrer">
                            <div className="home-link" >
                                <AiOutlineGithub />
                            </div>
                        </a>
                        <a href="https://linkedin.com/in/erik-blix" target="_blank" rel="noopener noreferrer">
                            <div className="home-link">
                                <AiFillLinkedin />
                            </div>
                        </a>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;