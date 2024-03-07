import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import ProductCard from "../../components/common/ProductCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback((productId) => {
    dispatch(removeFromCart(productId));
  }, []);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="products-container">
          {cartItems.map((product, index) => {
            return (
              <ProductCard
                key={index}
                product={product}
                removeFromCart={handleRemoveFromCart}
                isAddBtn={false}
              />
            );
          })}
        </div>
      ) : (
        "No Items in cart"
      )}
    </>
  );
};

export default Cart;
