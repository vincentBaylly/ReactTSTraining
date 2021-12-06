interface ProductDetails {
  img: string;
  name: string;
  description: string;
}

interface Props {
  productDetail: ProductDetails;
}

function ProductDetails(props: Props) {
  const productDetail = props.productDetail;
  return (
    <div>
      <div>
        <img
          src={productDetail.img}
          width="25%"
          height="25%"
          alt="language icon"
        />
        <h3>{productDetail.name}</h3>
      </div>
      <br />
      <div>{productDetail.description}</div>
      <br />
      <br />
    </div>
  );
}

export default ProductDetails;
