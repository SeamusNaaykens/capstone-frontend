import './Footer.scss'
import facebook from '../../assets/icons/Icon-facebook.svg'
import instagram from '../../assets/icons/Icon-instagram.svg'
import twitter from '../../assets/icons/Icon-twitter.svg'
import logo from '../../assets/icons/GROWLocal.png'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content-container'>
                <h1 className='footer__heading'>Contacts</h1>
                <div className='footer__section-container'>
                    <h2 className='footer__subheading'>PHONE NUMBER</h2>
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
                <div>
                    <h1 className='footer__heading'>Social</h1>
                    <img className='footer__icon' src={facebook}/>
                    <img className='footer__icon'src={instagram}/>
                    <img className='footer__icon' src={twitter}/>
                </div>
            </div>
            <img className='footer__logo' src={logo}/>
        </footer>
    )
}
export default Footer