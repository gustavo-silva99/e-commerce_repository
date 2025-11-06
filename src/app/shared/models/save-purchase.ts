export interface SavePurchaseDto {
  total: number;
  products: { id: string; quantity: number }[];
}
