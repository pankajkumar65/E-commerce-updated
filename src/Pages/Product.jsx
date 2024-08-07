import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Productdisp from '../Components/ProductDisplay/Productdisp';
import DescriptionBox from '../Components/ProductDisplay/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);

  const product = products.find(p => p.id == productId);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisp product={product} />
      <DescriptionBox product={product} />
      <RelatedProduct category={product.category} currentProductId={product.id} />
      {/* <RelatedProduct product={product} /> */}
    </div>
  );
};

export default Product;
