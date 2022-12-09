import './Marketplace.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Marketplace() {

    const { profileId } = useParams()

    const passProfileId = profileId || null

    const [produces, setProduces] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/produce`)
            .then(response => {
                setProduces(response.data)
            }).catch(err => {
                console.log("Error 404 Bad Request", err)
            })
    }, [])




    return (
        produces.map((produce) => (
            <Link to={`/${produce.user_id}`} className='marketplace-card'>
                <card >
                    <img className='marketplace-card__image' src={produce.image} />
                    <h3 className='marketplace-card__item-name'>{produce.produce_name}</h3>
                    <div className='marketplace-card__content-container'>
                        <div>
                            <p className='marketplace-card__heading'>CATEGORY:</p>
                            <p className='marketplace-card__content'>{produce.produce_type}</p>
                        </div>
                        <div>
                            <p className='marketplace-card__heading'>QUANITY:</p>
                            <p className='marketplace-card__content'>{produce.quantity}</p>
                        </div>
                        <div>
                            <p className='marketplace-card__heading'>HARVESTED ON:</p>
                            <p className='marketplace-card__content'>{new Date(produce.harvest_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                </card>
            </Link>))
    )
}
export default Marketplace