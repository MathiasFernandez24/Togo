export interface TogoModelCategory {
  id: string;
  name: string;
  color: string;
}

export interface TogoModel {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  detail: string;
  category: TogoModelCategory;
  photoPath: string;
  createdAt: string;
  updatedAt: string;
}
