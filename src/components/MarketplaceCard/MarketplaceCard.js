import './MarketplaceCard.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function MarketplaceCard({userId, type, quantity, harvest, posted, image, name}) {

    const [isShown, setIsShown] = useState(false)


    return (
        <Link to={`/${userId}`} className='marketplace-card'>
            <div className='marketplace-card__container'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                >
              
                <img className='marketplace-card__image' src={image} alt={name}/>
                {isShown && <div className='marketplace-card__detail-overlay'>
                    <div className='marketplace-card__content-container--overlay'>
                        <div className='marketplace-card__content-subcontainer--overlay'>
                            <p className='marketplace-card__heading--overlay'>Category</p>
                            <p className='marketplace-card__content--overlay'>{type}</p>
                        </div>
                        <div className='marketplace-card__content-subcontainer--overlay'>
                            <p className='marketplace-card__heading--overlay'>Quantity</p>
                            <p className='marketplace-card__content--overlay'>{quantity}</p>
                        </div>
                    </div>
                    <div className='marketplace-card__content-container--overlay'>
                        <div className='marketplace-card__content-subcontainer--overlay'>
                            <p className='marketplace-card__heading--overlay'>Harvested On</p>
                            <p className='marketplace-card__content--overlay'>{new Date(harvest).toLocaleDateString()}</p>
                        </div>
                        <div className='marketplace-card__content-subcontainer--overlay'>
                            <p className='marketplace-card__heading--overlay'>Posted On</p>
                            <p className='marketplace-card__content--overlay'>{new Date(posted).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>}
            </div>
            <h3 className='marketplace-card__item-name'>{name}</h3>
        </Link >
    )
}
export default MarketplaceCard