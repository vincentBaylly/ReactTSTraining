import { IProductItem } from "../../models/ProductItem";

interface Props {
  productItem: IProductItem;
}

function ProductDetails(props: Props) {
  const productItem = props.productItem;
  return (
    <div>
      <div>
        <img
          src={productItem.img}
          width="25%"
          height="25%"
          alt="language icon"
        />
        <h3>{productItem.itemName}</h3>
      </div>
      <br />
      <div>{productItem.description}</div>
      <br />
      <br />
    </div>
  );
}

export default ProductDetails;
