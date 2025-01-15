import './App.css'
import dogBoarding from './assets/DogBoardingPH.png'
import dogBoardingIcon from './assets/dogboarding-icon.png'
import contactsManagerIcon from './assets/contacts manager.png'
import taskManagerIcon from './assets/task manager.png'
import contactsManager from './assets/ContactsManager.png'
import taskManager from './assets/TaskManager.png'

function Projects() {

    const projects = [
        {
            name: 'DogBoardingPH',
            logo: dogBoardingIcon,
            about: "A pet care SAAS platform that connects dog sitters with owners, making it easy to find reliable and trustworthy care for pets during the owner's absence.",
            stack: ['React', 'NodeJS', 'ExpressJS', 'Git', 'MongoDB', 'Figma', 'CSS'],
            features: [
                'Authentication: JWT-based sessions, Google Login with OAuth2Client, and secure password hashing.',
                'Sitter Approval: Admin email approval required before sitters can create profiles.',
                'Chat: Real-time messaging with text and image support, auto-sorting latest conversations.',
                'Booking Management: Tracks and updates booking statuses (pending, confirmed, completed).',
                'Image Storage: Google Drive integration for secure image storage and display via URLs.',
                'Database: MongoDB stores all data except images (stored in Google Drive).',
                'Sitter Directory: Searchable sitter list sorted by ratings with location-based filtering.',
                'Profile Management: Sitters can update profiles, including services and images.',
                'Reviews: Booking-specific reviews with star ratings and feedback for completed bookings.'
            ],
            imgSrc: dogBoarding,
            videoSrc: 'https://www.youtube.com/embed/pohIYjIGTTs?si=mu_PWQAul3WafRnU',
            href: 'https://www.dogboarding.ph',
            url: 'dogboarding.ph',
        },
        {
            name: 'Contacts Manager',
            logo: contactsManagerIcon,
            about: 'An intuitive tool for organizing and managing personal and professional contacts, simplifying access to important connections and their details.',
            stack: ['NodeJS', 'React', 'MongoDB', 'Git', 'Figma', 'CSS', 'ExpressJS'],
            features: [
                'Authentication: Secure JWT-based sessions with user-specific contact lists.',
                'Contact Management: Create, read, update, and delete contacts with dynamic updates on interactions.',
                'Time Formatting: Displays relative timestamps (e.g., "just now," "1h ago").',
                'Filtering: Filter contacts by recent, starred, or archived.',
                'Profile Pictures: Multer for file uploads; Sharp compresses images for efficient MongoDB storage.'
            ],         
            imgSrc: contactsManager,
            videoSrc: 'https://www.youtube.com/embed/WEYxvQKRtkA?si=Qb3Kiqn7QL2eyohZ',
            href: 'https://contactsmanager.thomascansino.com',
            url: 'contactsmanager.com',
        },
        {
            name: 'Task Manager',
            logo: taskManagerIcon,
            about: 'A productivity app that helps users plan, organize, and track tasks efficiently, allowing them to save and prioritize activities for better time management.',
            stack: ['ExpressJS', 'Git', 'NodeJS', 'Figma', 'MongoDB', 'React', 'CSS'],
            features: [
                'Authentication: Secure JWT-based sessions with user-specific task lists.',
                'Task Management: Full CRUD for tasks linked to calendar days.',
                'Daily Sorting: Automatically arranges tasks chronologically (12:00 AM to 11:59 PM).',
                'Calendar Integration: Organize and view tasks by specific dates.',
                'UX Enhancements: Interactive modals for seamless task creation and editing.'
            ],
            imgSrc: taskManager,
            videoSrc: 'https://www.youtube.com/embed/DesEesS2Hx4?si=x8jjWyAFE3X_Uwem',
            href: 'https://taskmanager.thomascansino.com',
            url: 'taskmanager.com',
        },
    ];

    return (
        <div className='projects-container'>
            <div className='projects-main-container' id='projects'>
                <div className='bubble-label'>Projects</div>

                {projects.map((project, i) => (
                    <div key={i} className='projects-main-card-container shadow'>
                        <div className='projects-main-card-image-video-container'>
                            <div className='projects-main-card-video-container'>
                                <iframe 
                                className='projects-main-card-video shadow'
                                src={project.videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen />
                            </div>

                            <div className='projects-main-card-image-container'>
                                <img src={project.imgSrc} alt={`project-${i+1} image`} className='projects-main-card-image shadow'/>
                            </div>
                        </div>

                        <div className='projects-main-card-about-container'>
                            <span className='projects-main-card-about-title-container'>
                                <div className='projects-main-card-icon'>
                                    <img src={project.logo} alt='project-icon' className='projects-main-card-icon-image'/>
                                </div>
                                <div>{project.name}</div>
                            </span>

                            <span className='projects-main-card-about-text-container'>
                                {project.about}
                            </span>

                            <ul>
                                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                            </ul>

                            <div className='projects-main-card-about-stack-container'>
                                {project.stack.map((tech, i) => <div key={i} className='bubble-label'>{tech}</div>)}
                            </div>

                            <a href={project.href} target='_blank'>
                                <label className='projects-main-card-url-label'>
                                    <i className="fa-solid fa-arrow-up-right-from-square projects-main-card-about-icon disable-pointer"></i>
                                    <span>{project.url}</span>
                                </label>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;