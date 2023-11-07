import { IMG_CDN_URL } from "../utils/constants";

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

export default RestaurantCard;