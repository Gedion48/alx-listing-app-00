import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Luxury Villa",
    image: "/images/house.png",
    rating: 4.9,
    address: {
      street: "123 Palm St",
      city: "Los Angeles",
      country: "USA"
    },
    description: "A luxurious villa with ocean view and modern amenities.",
    category: ["Pool", "Wi-Fi", "Kitchen", "Parking"],
    price: 250,
    reviews: [
      {
        name: "Alice Johnson",
        rating: 5,
        comment: "Absolutely loved it! Highly recommend.",
        avatar: "/images/avatar1.png"
      },
      {
        name: "Bob Smith",
        rating: 4,
        comment: "Great place, just a bit far from the city center.",
        avatar: "/images/avatar2.png"
      }
    ]
  },
  // Add more properties as needed
];
