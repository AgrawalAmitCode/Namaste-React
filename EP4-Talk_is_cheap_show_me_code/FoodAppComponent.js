import './index.css'
// import './constants.js'
import { IMG_CDN_URL, restaurantList } from './constants.js'

/**
 * #### FoodAppComponent will have all these components ####
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Component
 *  - Restaurant Container
 *      - RestaurantCard
 *          - img
 *          - Name of Restaurant, Start Raiting, Cuisine, Dilevery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *  
 */

const Header = () => {
    return (
        <div className="header">
            {/* below logo-container can be removed and direct img tag can be used no issue */}
            <div className="logo-container"> 
                <img className='logo' src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-1x?logoTemplateVersion=1&v=637810055012670000&text=Burgerlicious"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData } = props
    const {name, cuisines, cloudinaryImageId, avgRating, deliveryTime, costForTwo } = resData?.data;

    return (
        <div className='restaurant-card'>
            {/* below res-image can be removed and direct img tag can be used no issue */}
            <div className='res-image-container'>
                <img alt="res-image" className='res-image' src={IMG_CDN_URL + cloudinaryImageId }/>
            </div>
            <div className='res-details'>
                <h3 className='res-heading'>{name}</h3>
                <span className='res-cuisine'>{cuisines.join(', ')}</span>
                <div className='res-raiting-min-cost'>
                    <span>{avgRating}</span>
                    <span>{deliveryTime} min</span>
                    <span>{costForTwo/100} for two</span>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='restaurant-container'>
                {restaurantList.map((resObj) => (
                   <RestaurantCard key={resObj.data.id} resData={resObj}/>
                ))}
            </div>
        </div>
    )
}

export const FoodAppComponent = () => {
    return (
        <div className="app">
            <Header/>    
            <Body/>        
        </div>
    )
}