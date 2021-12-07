export interface IProductItem {
  id: number;
  img: string;
  itemName: string;
  description: string;
  price: number;
  isFavorite: boolean;
  quantity?: number;
  comments: [];
  showProductDescription?: Function;
}
