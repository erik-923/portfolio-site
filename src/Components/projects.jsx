import '../css/projects.css';
import SocialVerse from '../assets/socialverse.png';
import WorkoutApp from '../assets/workout-app.png';
import { AiFillGithub } from "react-icons/ai";


function Projects() {

    const projects = [
        {
            name: "SocialVerse",
            description: "My social media web app, SocialVerse, created with the Django web framework was my first large web development project. This app offers users a familiar social networking experience, enabling connections, sharing, and engagement. It includes essential features like user authentication, messaging, a feed, and user profiles with the  ability to recomend new friends and search users.",
            technologies: [
                "Python", "Django", "HTML", "CSS", "JavaScript"
            ],
            link: "https://github.com/erik-923/Social-Media-Site",
            image: SocialVerse
        },
        {
            name: "Workout App",
            description: "I'm excited to present my latest project, a user-friendly workout app developed with React Native. This app is designed to simplify fitness routines, offering users a convenient way to plan, track, and follow workouts from anywhere. With a clean and intuitive interface, it provides access to a variety of exercises, customizeable and personalized routines, and progress tracking features. ",
            technologies: [
                "React Native", "JavaScript"
            ],
            link: "https://github.com/erik-923/WorkoutApp",
            image: WorkoutApp
        }
    ];

    return (
        <div className='projects-container'>
            <div className='projects-header'>
                Projects
            </div>
            <div className='projects-content'>
                {
                    projects.map((project, index) => (
                        <div className='project-item' key={index}>
                            <div className='project-mockup'>
                                <img src={project.image} className='project-image'/>
                            </div>
                            <div className='project-description'>
                                <div className='project-title'>
                                    <div className='title-fill'>
                                        <span className='title-underline'>
                                            {project.name}
                                        </span>
                                    </div>                        
                                    <a href={project.link} className='fill-space'>
                                        <div className='project-link'>
                                            <AiFillGithub />
                                        </div>
                                    </a>                          
                                </div>
                                <div className='project-text'>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <div className='tech-used'>
                                    <div className='tech-title'>
                                        <span className='title-underline'>
                                        Technologies Used
                                        </span>
                                    </div>
                                    <div className='tech-list'>
                                        {
                                            project.technologies.map((tech, index) => (
                                                <div className='tech-item' key={index}>
                                                    {tech}
                                                </div>  
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;