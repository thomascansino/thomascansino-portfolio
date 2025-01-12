import './App.css'


function Footer() {

    return (
        <div className='footer-container'>
            <footer className='footer-main-container'>
                <span className='footer-span'>{new Date().getFullYear()} <i className="fa-regular fa-copyright disable-pointer"></i> Thomas Cansino</span>
            </footer>
        </div>
    );
};

export default Footer;