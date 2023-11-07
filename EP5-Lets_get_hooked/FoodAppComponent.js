import './index.css'
// import './constants.js'
import { IMG_CDN_URL, restaurantList } from './utils/constants.js'
import {Header} from './components/Header'
import Body from './components/Body'

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




export const FoodAppComponent = () => {
    return (
        <div className="app">
            <Header/>    
            <Body/>        
        </div>
    )
}