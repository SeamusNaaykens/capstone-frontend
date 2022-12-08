import './Profile.scss'
import Header from '../../components/Header/Header'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Chatbox from '../../components/Chatbox/Chatbox'
import ProfileMarketplace from '../../components/ProfileMarketplace/ProfileMarketplace'
import Footer from '../../components/Footer/Footer'


function Profile() {
    return (
        <main className='profile__page'>
            <div className='profile__page-content-container'>
                <ProfileInfo />
                <Chatbox />
            </div>
            <ProfileMarketplace />
        </main>
    )
}
export default Profile