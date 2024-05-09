export type FilmType = {
  _id: string;
  brand: string;
  name: string;
  iso: number;
  formatThirtyFive: boolean;
  formatOneTwenty: boolean;
  color: boolean;
  process: string;
  staticImageUrl: string;
  description: string;
  customDescription: string[];
  keyFeatures: [{ _id: string; feature: string }];
  dateAdded: string;
};

export type FilterValuesType = {
  brands: string[];
  isos: number[];
};

export type FilterType = {
  brand: string;
  iso: string | undefined;
  formatThirtyFive: boolean | undefined;
  formatOneTwenty: boolean | undefined;
  color: boolean | undefined;
  name: string;
};
