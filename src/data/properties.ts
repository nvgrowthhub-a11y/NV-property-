export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  image: string;
  badge: string;
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "The Aurelia Pavilion",
    price: "₹45,00,00,000",
    location: "Malabar Hill, Mumbai",
    beds: 5,
    baths: 6,
    sqft: "8,500",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    badge: "Limited Edition",
  },
  {
    id: "2",
    title: "Luminary Sky Mansion",
    price: "₹28,50,00,000",
    location: "DLF Phase 5, Gurugram",
    beds: 4,
    baths: 5,
    sqft: "6,200",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "New Launch",
  },
  {
    id: "3",
    title: "Zephyr Ocean Estate",
    price: "₹62,00,00,000",
    location: "Candolim, Goa",
    beds: 6,
    baths: 7,
    sqft: "12,000",
    type: "Beachfront Villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "Exclusive Right",
  },
];
