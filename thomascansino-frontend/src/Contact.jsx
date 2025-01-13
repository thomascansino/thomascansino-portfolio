import './App.css'

function Contact() {


    return (
        <div className='contact-container'>
            <div className='contact-main-container' id='contact'>
                <div className='bubble-label'>Contact Me</div>

                <div className='contact-main-links'>
                    <div className='contact-main-link'>
                        <i className="fa-regular fa-envelope contact-main-link-icon disable-pointer"></i>
                        <span className='contact-main-link-text'>thomas.cansino@gmail.com</span>
                        <i 
                        onClick={() => navigator.clipboard.writeText('thomas.cansino@gmail.com')}
                        className="fa-regular fa-copy contact-main-link-icon"></i>
                    </div>
                    <div className='contact-main-link'>
                        <i className="fa-solid fa-link contact-main-link-icon disable-pointer"></i>
                        <a href='https://drive.google.com/file/d/1BunyjBSF6m4Owlj4rZ9LryLSpQKW9URd/view?usp=sharing' target='_blank' className='contact-main-link'>
                            <span className='contact-main-link-text'>CV/Resume GDrive Link</span>
                            <i className="fa-solid fa-arrow-up-right-from-square contact-main-link-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;