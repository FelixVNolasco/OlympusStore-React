export interface Category {
  _id: string;
  img: string;
  title: string;
  category: string;
}


export interface CategoryResponse {
  data: Category[]
}