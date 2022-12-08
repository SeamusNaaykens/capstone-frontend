import './Homepage.scss'
import Marketplace from '../../components/Marketplace/Marketplace.js'



function Homepage() {
    return (
        <main className='homepage'>
            <div className='homepage__banner'>
                <h1></h1>
            </div>
            <div className='homepage__markerplace-container'>
                <Marketplace />
            </div>
        </main>
    )
}
export default Homepage