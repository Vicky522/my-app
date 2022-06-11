export default interface Petrol {
  id: string;
  title: string;
  description: string;
  featureImage: FeatureImage;
  note?: string;
  icon?: FeatureImage;
}

export interface FeatureImage {
  link: string;
  alt: string;
}
