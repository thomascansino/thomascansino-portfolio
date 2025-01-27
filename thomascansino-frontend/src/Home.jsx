import './App.css'
import mobileFrame from './assets/thomascansino_mobile_frame.png'
import largeFrame from './assets/thomascansino_large_frame.png'

function Home() {
    

    return (
        <div className='home-container'>
            <div className='home-main-container' id='home'>
                <div className='home-main-image-frame-container'>
                    <img src={mobileFrame} alt='profile pic' className='home-main-image-mobile'/>
                    <img src={largeFrame} alt='profile pic' className='home-main-image-large' />
                </div>

                <div className='home-main-about-container'>
                    <div className='home-main-about-intro-container'>
                        <span className='home-main-about-intro-title-container'>
                            Hi, I'm Thomas 👋
                        </span>
                        <span className='home-main-about-intro-text-container'>
                            <p>I have 1 year experience as a full-stack developer in building & maintaining SAAS products, and I’m looking forward to bring my skills to your team.</p> 
                            <p>The latest product I've worked on as a lead full-stack developer is DogBoardingPH, an app that connects pet owners with dog sitters to find reliable care for their pets while they're away.</p>
                            <p>I’ve also worked as a lead full-stack developer on a contact management app for organizing connections and a task management app to help plan and do tasks efficiently.</p>
                        </span>
                    </div>
                    <div><hr></hr></div>
                    <div className='home-main-about-outro-container'>
                        <div className='home-main-about-outro-icons-container'>
                            <a href='https://www.linkedin.com/in/thomascansino/' target='_blank'><i className="fa-brands fa-linkedin home-main-about-outro-icons"></i></a>
                            <a href='https://github.com/thomascansino' target='_blank'><i className="fa-brands fa-github home-main-about-outro-icons"></i></a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;