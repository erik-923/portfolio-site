import '../css/about.css';

function About() {
     const skills = ["Python","Java", "JavaScript", "HTML","CSS", "SQL", "R", "SAS", "React JS", "Django", "React Native",
                     "Git", "Tableau", "Stata", "Excel"];
    return (
        <div className="about-container">
            <div className='about-header'>
                About Me
            </div>
            <div className='about-text-container'>
                <div className='about-text'>
                    <div className='about-text-header'>
                        Get to know me!
                    </div>
                    <div className='about-text-body'>
                    <p>
                        My name is Erik Blix and I&apos;m a junior at Elon University, majoring in Statistics and Computer Science 
                        with a minor in Economics. Originally from New Hampshire, I&apos;m passionate about 
                        both software engineering and data science.
                    </p>
                    <p>
                        I love the precision of coding and the insights statistics can uncover. My journey 
                        is all about exploring the intersection of technology and data, seeking innovative 
                        solutions, and contributing to data-driven decision-making.  
                    </p>
                    <p>
                        Check out my portfolio to see some of my projects. Let&apos;s connect and explore possibilities together!
                    </p>
                    </div>
                </div>
                <div className='about-skills'>
                    <div className='about-skills-header'>
                        Skills
                    </div>
                    <div className='skills-container'>
                    {
                        skills.map((skill, index) => (
                            <div key={index} className='skill-item'>{skill}</div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;