import './Marketplace.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import MarketplaceCard from '../MarketplaceCard/MarketplaceCard.js'

function Marketplace() {

    const [produces, setProduces] = useState([])
    const [searchInput, setSearchInput] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/produce`)
            .then(response => {
                setProduces(response.data)
            }).catch(err => {
                console.log("Error 404 Bad Request", err)
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = produces.filter((post) => {
                return Object.values(post).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(produces)
        }
    }

    return (
        <div className='marketplace'>
            <div className='marketplace__form-container'>
                <form className='marketplace__form'>
                    <div className='marketplace__search-container'>
                        <input
                            className='marketplace__search'
                            type='search'
                            placeholder='Search here'
                            onChange={(e) => searchItems(e.target.value)}
                            value={searchInput} >
                        </input>
                    </div>
                </form>
            </div>
            <section className='section-container'>
                {searchInput.length > 1 ? (filteredResults.map((produce) => {
                    return (
                        <MarketplaceCard
                            userId={produce.user_id}
                            type={produce.produce_type}
                            quantity={produce.quantity}
                            harvest={produce.harvest_date}
                            posted={produce.post_date}
                            image={produce.image}
                            name={produce.produce_name} />)
                            
                })) : (produces.map((produce) => {
                    return (<MarketplaceCard
                        userId={produce.user_id}
                        type={produce.produce_type}
                        quantity={produce.quantity}
                        harvest={produce.harvest_date}
                        posted={produce.post_date}
                        image={produce.image}
                        name={produce.produce_name} />)
                }))}
            </section>
        </div>
    )
}
export default Marketplace