import { useNavigate } from "react-router-dom";
import { fetchProductDetail } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, addToCart, removeFromCart, isAddBtn }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isAddBtn) {
      addToCart(product);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleGotoDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item">
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p className="product-desc">{product.description}</p>
      <p>₹{product.price}</p>
      <div className="product-buttons">
        <button className="details-btn" onClick={handleGotoDetail}>
          View Details
        </button>
        <button
          className={isAddBtn ? "add-btn" : "remove-btn"}
          onClick={handleButtonClick}
        >
          {isAddBtn ? "Add to Cart" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
