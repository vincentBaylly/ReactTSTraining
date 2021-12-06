import { useState } from "react";

interface ProductItem {
  id: number;
  img: string;
  itemName: string;
  description: string;
  price: number;
  isFavorite: boolean;
  quantity?: number;
  showProductDescription?: any;
}

interface Props {
  productItem: ProductItem;
}

function ProductItem(props: Props) {
  const [favorite, isFavorite] = useState(props.productItem.isFavorite);
  const productItem = props.productItem;

  const handleClickFavorite = () => {
    isFavorite(!isFavorite);
  };

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={productItem.img} alt="" className="listImg" />
        </div>
        <div className="itemDescription">
          <h3>{productItem.itemName}</h3>
          <p>{productItem.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        {productItem.price} EUR
        <div
          onClick={handleClickFavorite}
          className={favorite ? "isFavorite" : "notFavorite"}
        ></div>
      </div>
    </div>
  );
}

export default ProductItem;
