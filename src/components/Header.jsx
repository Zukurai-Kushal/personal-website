import profileImg from '../assets/profile_picture.jpg'
import linkedInLogo from '../assets/linkedin.svg'
import gitHubLogo from '../assets/github.svg'
import resume from '../assets/Kushal_Thapa_Resume.pdf'


export default function Header() {
    return <header id="hero">
        <div id='profile-container'>
            <img src={profileImg} alt="Profile Picture" width='150px'/>
            <h1>Kushal Thapa</h1>
            <h2>Software Engineer</h2>
        </div>
        <section id="section-about-me">
            <p>
                Hi, I'm <strong>Kushal</strong>, and I like to make things.
                <br />
                Whether it's software development, game development, or photography,
                I enjoy the process of bringing ideas to life—navigating their challenges and celebrating the final outcome.
                <br />
                Here, you will find things that I've made, from web applications to AIoT systems
                (including this very website! :D).
            </p>
            <div className="profile-links">
                <a href="https://www.linkedin.com/in/kushal-thapa-935261207/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt="LinkedIn Logo" width="30px" className="icon"/> LinkedIn
                </a>
                <a href="https://github.com/Zukurai-Kushal" target="_blank" rel="noopener noreferrer">
                    <img src={gitHubLogo} alt="LinkedIn Logo" width="30px" className="icon" /> GitHub
                </a>
                <a href={resume} target="_blank">
                    Resume
                </a>
            </div>
        </section>
    </header>
}