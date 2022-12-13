import './Profile.scss'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Chatbox from '../../components/Chatbox/Chatbox'
import ProfileMarketplace from '../../components/ProfileMarketplace/ProfileMarketplace'


function Profile() {

    return (
        <main className='profile-page'>
            <div className='profile-page__content-container'>
                <ProfileInfo />
                <Chatbox />
            </div>
                <ProfileMarketplace />
        </main>
    )
}
export default Profile