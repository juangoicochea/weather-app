import linkedin from '../img/linkedin.png'
import github from '../img/github.png'
import './About.css';

export default function About () {
    return (
        <div className='containerAbout'>
            <h1>Thanks for being here!</h1>
            <p>Hi! My name is Juan Carlos Goicochea, I’m a web fullstack developer student at Soy Henry bootcamp.</p>
            <p>This is an individual project where I made using React with Routing and CSS Styles for the frontend.</p>
            <p>This App is 100% responsive made it with CSS.</p>
            <p>If you are interested for kwon more about my skills you can get in touch at:
                <a href="https://www.linkedin.com/in/juan-goicochea/">
                    <img className='sociallogo' src={linkedin} alt='Linkedin' />
                </a>
                <a href="https://github.com/juangoicochea">
                    <img className='sociallogo' src={github} alt='juangoicochea Github' />
                </a>
            </p>
        </div>
    )
}