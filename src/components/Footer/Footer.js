import './Footer.scss'
import facebook from '../../assets/icons/Icon-facebook.svg'
import instagram from '../../assets/icons/Icon-instagram.svg'
import twitter from '../../assets/icons/Icon-twitter.svg'
import logo from '../../assets/icons/GROWLocal.jpg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content-container'>
                <div className='footer__contact-container'>
                    <div className='footer__heading-container--1'>
                        <h2 className='footer__heading'>Contacts</h2>
                    </div>
                    <div>
                        <div className='footer__section-container'>
                            <h3 className='footer__subheading'>PHONE NUMBER</h3>
                            <p className='footer__content'>(403) 234-456</p>
                        </div>
                        <div className='footer__section-container'>
                            <h2 className='footer__subheading'>ADDRESS</h2>
                            <p className='footer__content'>101 9 Ave SW, Calgary AB T2P 1J9, Canada</p>
                        </div>
                        <div className='footer__section-container'>
                            <h2 className='footer__subheading'>EMAIL</h2>
                            <p className='footer__content'>seamus@growlocal.io</p>
                        </div>
                    </div>
                </div>
                <img className='footer__logo--1' src={logo} alt='GrowLocal logo' />
                <div className='footer__social-container'>
                    <div className='footer__heading-container--2'>
                        <h2 className='footer__heading'>Social</h2>
                    </div>
                    <div className='footer__icon-container'>
                        <img className='footer__icon--facebook' src={facebook} alt='facebook logo' />
                        <img className='footer__icon--instagram' src={instagram} alt='instagram logo'/>
                        <img className='footer__icon--twitter' src={twitter}  alt='twitter logo'/>
                    </div>
                </div>
            </div>
            <img className='footer__logo--2' src={logo} alt='GrowLocal logo'/>

        </footer>
    )
}
export default Footer