export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
export interface Category {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;
  userId: number;
}

export interface ProductList {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string;
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  categoryName: string;
}
// export interface ProductList {
//   id: number
//   title: string
//   price: number
//   description: string
//   category: string
//   image: string
//   rating: Rating
// }

// export interface Rating {
//   rate: number
//   count: number
// }
