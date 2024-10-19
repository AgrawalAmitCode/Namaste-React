import { useSelector, useDispatch } from "react-redux";
import ItemAccordianBody from "./ItemAccordianBody";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className="text-center m-10 p10">
			<h1 className="text-2xl font-bold">Cart</h1>
			<div className="w-6/12 p-4 m-auto">
				<button
					className="p-2 m-2 bg-black text-white rounded-lg"
					onClick={handleClearCart}
				>
					Clear Cart
				</button>
				{cartItems.length === 0 ? (
					<p>Your cart is Empty!! Add items to cart</p>
				) : null}
				<ItemAccordianBody itemCards={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
