import './App.css'

function NavModal({ closeNavModal }) {


    return (
        <div className='nav-modal'>
            <div className='nav-overlay' onClick={closeNavModal}></div>
            <div className='nav-modal-form'>
                <div className='nav-header-container'>
                    <i onClick={closeNavModal} className="fa-solid fa-xmark"></i>
                </div>
                <nav className='nav-main-container'>
                    <a href='#home'>Home</a>
                    <a href='#projects'>Projects</a>
                    <a href='#skills'>Skills</a>
                    <a href='#contact'>Contact Me</a>
                </nav>
            </div>
        </div>
    );
};

export default NavModal;