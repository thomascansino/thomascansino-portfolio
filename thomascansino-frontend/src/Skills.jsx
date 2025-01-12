import './App.css'
import javascript from './assets/javascript.png'
import html from './assets/html.png'
import css from './assets/css.png'
import react from './assets/react.png'
import expressjs from './assets/expressjs.png'
import nodejs from './assets/nodejs.png'
import mantineui from './assets/mantine ui.png'
import tailwindcss from './assets/tailwindcss.png'
import git from './assets/git.png'
import postgresql from './assets/postgresql.png'
import mongodb from './assets/mongodb.png'
import figma from './assets/figma.png'
import googlecloud from './assets/google cloud storage.png'

function Skills() {
    
    const icons = [
        {
            skill: 'React',
            icon: react,
        },
        {
            skill: 'NodeJS',
            icon: nodejs,
        },
        {
            skill: 'ExpressJS',
            icon: expressjs,
        },
        {
            skill: 'GCloud',
            icon: googlecloud,
        },
        {
            skill: 'MongoDB',
            icon: mongodb,
        },
        {
            skill: 'PostgreSQL',
            icon: postgresql,
        },
        {
            skill: 'Figma',
            icon: figma,
        },
        {
            skill: 'Git',
            icon: git,
        },
        {
            skill: 'HTML',
            icon: html,
        },
        {
            skill: 'Javascript',
            icon: javascript,
        },
        {
            skill: 'CSS',
            icon: css,
        },
        {
            skill: 'MantineUI',
            icon: mantineui,
        },
        {
            skill: 'TailwindCSS',
            icon: tailwindcss,
        },
    ];
    

    return (
        <div className='skills-container'>
            <div className='skills-main-container' id='skills'>
                <div className='bubble-label'>Skills</div>

                <div className='skills-main-icons-container'>
                    {icons.map((icon, i) => (
                        <div key={i} className='skills-main-icon-container'>
                            <div className='skills-main-icon'>
                                <img src={icon.icon} alt={`icon image-${i + 1}`} className='skills-main-icon-image'/>
                            </div>
                            <span className='skills-main-icon-text'>{icon.skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;