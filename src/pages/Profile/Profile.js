import './Profile.scss'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import Chatbox from '../../components/Chatbox/Chatbox'
import ProfileMarketplace from '../../components/ProfileMarketplace/ProfileMarketplace'


function Profile() {
    return(
        <main>
            <ProfileInfo/>
            <Chatbox/>
            <ProfileMarketplace/>
        </main>
    )
}
export default Profile