import './App.css'

function Header({ openNavModal }) {


    return (
        <div className='header-container'>
            <header className='header-main-container'>
                <nav className='header-main-nav'>
                    <div className='header-main-nav-frame'>
                        <a href='#home' className='header-main-nav-frame-links'>Home</a>
                        <a href='#projects' className='header-main-nav-frame-links'>Projects</a>
                        <a href='#skills' className='header-main-nav-frame-links'>Skills</a>
                        <a href='#contact' className='header-main-nav-frame-links'>Contact Me</a>
                        <i onClick={openNavModal} className="fa-solid fa-bars header-main-nav-frame-icons"></i>
                    </div>
                </nav> 
            </header>
        </div>
    );
};

export default Header;

