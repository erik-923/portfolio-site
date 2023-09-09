import '../css/home.css';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineCloudDownload } from "react-icons/ai";

function Home() {

    const onResumeClick = () => {
        // using Java Script method to get PDF file
        fetch('Erik Blix - Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Erik Blix - Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div id="home-container" className="flex-horizontal">
            <div className="flex-vertical fill-space center-items">
                <div className="home-text flex-vertical center-items">
                    <div className="home-name center-items">
                        Erik Blix
                    </div>
                    <div className="home-quote center-items">
                        I am&nbsp;
                        <TypeAnimation
                            sequence={[
                                'a computer science student.',
                                1000,
                                'a statistics student.',
                                1000,
                                'interested in software engineering.',
                                1000,
                                'passionate about data science.',
                                1000
                            ]}
                            speed={15}
                            deletionSpeed={50}
                            repeat={Infinity}
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
                    <div className='resume-button' onClick={onResumeClick}>
                        <AiOutlineCloudDownload fontSize={36}/> &nbsp;My Resume
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;