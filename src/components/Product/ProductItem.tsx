import { useState, useReducer, useCallback } from "react";

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(quantity: number, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return quantity + action.payload;
    case "decrement":
      return quantity - action.payload;
    default:
      throw new Error();
  }
}

interface ProductItem {
  id: number;
  img: string;
  itemName: string;
  description: string;
  price: number;
  isFavorite: boolean;
  quantity?: number;
  showProductDescription?: Function;
}

interface Props {
  productItem: ProductItem;
}

function ProductItem(props: Props) {
  const [favorite, isFavorite] = useState(props.productItem.isFavorite);
  const [quantity, setQuantity] = useReducer(reducer, 0);
  const productItem = props.productItem;

  const handleClickFavorite = () => {
    isFavorite(!favorite);
  };

  const handleClickDescription =
    //() => {
    //props.showProductDescription(productItem.id);
    useCallback(
      (event) => {
        productItem.showProductDescription(productItem.id - 1);
      },
      [productItem.id, props]
    );
  //};

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <img src={productItem.img} alt="" className="center-block thumb96" />
        </div>
        <div className="col-md">
          <h5>{productItem.itemName}</h5>
        </div>
        <div className="col-md">
          <button className="btn btn-info" onClick={handleClickDescription}>
            Info
          </button>
        </div>
        <div className="col-md">
          {productItem.price} EUR
          <div
            onClick={handleClickFavorite}
            className={favorite ? "isFavorite" : "notFavorite"}
          ></div>
        </div>
        <div className="col-md">
          product.quantity:{productItem.quantity} quantity:{quantity}
          <button
            onClick={() => setQuantity({ type: "decrement", payload: 1 })}
          >
            +
          </button>
          <button
            onClick={() => setQuantity({ type: "decrement", payload: 1 })}
            disabled={productItem.quantity === 0}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
