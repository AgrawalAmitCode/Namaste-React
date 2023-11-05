import './index.css'

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
    const {resName, cuisine } = props
    return (
        <div className='restaurant-card'>
            {/* below res-image can be removed and direct img tag can be used no issue */}
            <div className='res-image-container'>
                <img alt="res-image" className='res-image' src='https://imgmedia.lbb.in/media/2019/05/5cd0227cf714cd30f8bfc2a9_1557144188503.jpg'/>
            </div>
            <div className='res-details'>
                <h3 className='res-heading'>{resName}</h3>
                <span className='res-cuisine'>{cuisine}</span>
                <div className='res-raiting-min-cost'>
                    <span>4.4</span>
                    <span>38 min</span>
                    <span>500 for two</span>
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
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Aroma Hyderabad House" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
                <RestaurantCard resName="Meghna Foods" cuisine="Biryani, South-indian, North-indian, Chinese, SeaFood"/>
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