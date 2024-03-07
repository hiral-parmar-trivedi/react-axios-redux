import { useCallback, useEffect } from "react";
import ProductCard from "../../components/common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actions";
import { fetchProductList } from "../../redux/actions/productActions";

const ProductsList = () => {
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  }, []);

  return (
    <div className="products-container">
      {loading ? (
        <h2>Loading products...</h2>
      ) : error != "" ? (
        <h2>{error}</h2>
      ) : (
        products.length > 0 &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
              isAddBtn={true}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductsList;
