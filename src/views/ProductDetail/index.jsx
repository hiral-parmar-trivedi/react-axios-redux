import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    if (params?.productId) {
      dispatch(fetchProductDetail(params.productId));
    }
  }, [params.productId]);


  return <div className="product-detail-container">Product Detail</div>;
};

export default ProductDetail;
