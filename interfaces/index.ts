export interface Address {
  street: string;
  city: string;
  state?: string;
  country: string;
  zip?: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  image: string;
  rating: number;
  address: Address;
  description: string;
  category: string[]; // amenities
  price: number;
  reviews: Review[];
}
