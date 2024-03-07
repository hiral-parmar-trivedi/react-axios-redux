import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, submitOrder } from '../../redux/actions/actions'
import ProductCard from '../../components/common/ProductCard'
import { toast } from 'react-toastify'

const Cart = () => {
	const cartItems = useSelector(state => state.cartItems)
	const dispatch = useDispatch()

	const handleRemoveFromCart = useCallback(productId => {
		dispatch(removeFromCart(productId))
	}, [])

  const handleSubmitOrder = useCallback(() => dispatch(submitOrder(cartItems)), [cartItems])

	return (
		<>
			{cartItems.length > 0 ? (
				<div className='cart-container'>
					<div className='products-container'>
						{cartItems.map((product, index) => {
							return (
								<ProductCard
									key={index}
									product={product}
									removeFromCart={handleRemoveFromCart}
									isAddBtn={false}
								/>
							)
						})}
					</div>
          <div className='checkout-container'>
					<button className='checkout-btn' onClick={handleSubmitOrder}>Checkout</button>
          </div>
				</div>
			) : (
				'No Items in cart'
			)}
		</>
	)
}

export default Cart
