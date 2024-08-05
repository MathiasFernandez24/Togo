export type TogoModelCategory = {
  id: string;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
};

export type TogoModel = {
  id: string;
  title: string;
  detail: string;
  latitude: number;
  longitude: number;
  photoPath: string;
  createdAt: string;
  updatedAt: string;
  orderNumber: string;
  categoryId: string;
};
