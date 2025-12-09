export type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  imageUrl: string;
};

export type Product = {
  id: number;
  name: string;
  spec: string;
  originalPrice: string;
  salePrice: string;
  imageUrl: string;
  badge?: string; // 쿠폰적용가 같은 배지 텍스트
};