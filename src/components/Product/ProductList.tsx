import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";
import Comment from "../Comment/Comment";
import { getFetchProductList } from "../../services/productList";
import { IProductItem } from "../../models/ProductItem";

function ProductList() {
  const [productToShow, setProductToShow] = useState<IProductItem>();
  const [productItems, setProductItems] = useState<IProductItem[]>([]);

  const getProductDescription = (
    productItems: IProductItem[],
    productId: number
  ): IProductItem => {
    return productItems[productId];
  };

  useEffect((): any => {
    let mounted = true;
    getFetchProductList().then((items) => {
      if (mounted) {
        setProductItems(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const showProductDescription = (i: number) => {
    setProductToShow(getProductDescription(productItems, i));
  };

  return (
    <>
      <div className="productList">
        {productItems.map((itemInfo: IProductItem) => (
          <ProductItem productItem={itemInfo} key={itemInfo.id} />
        ))}
      </div>
      {productToShow ? (
        <div>
          <ProductDetails productItem={productToShow} />
          {productToShow.comments.map((comment: any) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductList;
