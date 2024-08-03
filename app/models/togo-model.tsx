export type TogoModelCategory = {
  id: string;
  name: string;
  color: string;
};

export type TogoModel = {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  detail: string;
  category: TogoModelCategory;
  photoPath: string;
  createdAt: string;
  updatedAt: string;
};
