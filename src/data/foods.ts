export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  description: string;
  veg: boolean;
}

export const foodItems: FoodItem[] = [
  // Veg
  { id: "v1", name: "Paneer Butter Masala", price: 249, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop", rating: 4.5, category: "veg", description: "Rich and creamy paneer in buttery tomato gravy", veg: true },
  { id: "v2", name: "Veg Biryani", price: 199, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", rating: 4.3, category: "veg", description: "Fragrant basmati rice with mixed vegetables", veg: true },
  { id: "v3", name: "Dal Makhani", price: 179, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop", rating: 4.6, category: "veg", description: "Slow-cooked black lentils in creamy sauce", veg: true },
  { id: "v4", name: "Chole Bhature", price: 159, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop", rating: 4.4, category: "veg", description: "Spicy chickpea curry with fluffy fried bread", veg: true },
  { id: "v5", name: "Masala Dosa", price: 129, image: "https://images.unsplash.com/photo-1668236543090-82eb5eada77a?w=400&h=300&fit=crop", rating: 4.7, category: "south-indian", description: "Crispy crepe filled with spiced potato", veg: true },
  { id: "v6", name: "Palak Paneer", price: 229, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop", rating: 4.2, category: "veg", description: "Cottage cheese in creamy spinach gravy", veg: true },

  // Non-Veg
  { id: "nv1", name: "Butter Chicken", price: 299, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop", rating: 4.8, category: "non-veg", description: "Tender chicken in rich tomato butter sauce", veg: false },
  { id: "nv2", name: "Chicken Biryani", price: 279, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop", rating: 4.7, category: "non-veg", description: "Aromatic rice layered with spiced chicken", veg: false },
  { id: "nv3", name: "Tandoori Chicken", price: 329, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop", rating: 4.6, category: "non-veg", description: "Charcoal-grilled marinated chicken", veg: false },
  { id: "nv4", name: "Fish Curry", price: 319, image: "https://images.unsplash.com/photo-1626508035297-4c5c4e0c3287?w=400&h=300&fit=crop", rating: 4.4, category: "non-veg", description: "Fresh fish in spicy coconut curry", veg: false },
  { id: "nv5", name: "Mutton Rogan Josh", price: 389, image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=300&fit=crop", rating: 4.5, category: "non-veg", description: "Kashmiri-style slow-cooked mutton", veg: false },

  // Desserts
  { id: "d1", name: "Gulab Jamun", price: 99, image: "https://images.unsplash.com/photo-1666190535120-09f28a8e9070?w=400&h=300&fit=crop", rating: 4.6, category: "desserts", description: "Soft milk dumplings in rose sugar syrup", veg: true },
  { id: "d2", name: "Chocolate Brownie", price: 149, image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop", rating: 4.8, category: "desserts", description: "Dense fudgy brownie with chocolate chips", veg: true },
  { id: "d3", name: "Rasmalai", price: 129, image: "https://images.unsplash.com/photo-1601303516150-c9d0a1db6270?w=400&h=300&fit=crop", rating: 4.5, category: "desserts", description: "Soft paneer balls in saffron milk", veg: true },
  { id: "d4", name: "Ice Cream Sundae", price: 179, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", rating: 4.7, category: "desserts", description: "Three scoops with toppings and sauce", veg: true },

  // Beverages
  { id: "b1", name: "Mango Lassi", price: 89, image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400&h=300&fit=crop", rating: 4.4, category: "beverages", description: "Refreshing mango yogurt smoothie", veg: true },
  { id: "b2", name: "Masala Chai", price: 49, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop", rating: 4.6, category: "beverages", description: "Spiced Indian tea with milk", veg: true },
  { id: "b3", name: "Cold Coffee", price: 129, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", rating: 4.3, category: "beverages", description: "Chilled blended coffee with cream", veg: true },

  // Fast Food
  { id: "ff1", name: "Veg Burger", price: 139, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop", rating: 4.2, category: "fast-food", description: "Crispy patty with fresh veggies", veg: true },
  { id: "ff2", name: "French Fries", price: 99, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", rating: 4.0, category: "fast-food", description: "Golden crispy potato fries", veg: true },
  { id: "ff3", name: "Chicken Wings", price: 229, image: "https://images.unsplash.com/photo-1608039829572-9b1234ef6d57?w=400&h=300&fit=crop", rating: 4.5, category: "fast-food", description: "Spicy crispy fried chicken wings", veg: false },

  // Chinese
  { id: "ch1", name: "Veg Manchurian", price: 169, image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop", rating: 4.3, category: "chinese", description: "Deep-fried veggie balls in tangy sauce", veg: true },
  { id: "ch2", name: "Hakka Noodles", price: 159, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop", rating: 4.1, category: "chinese", description: "Stir-fried noodles with vegetables", veg: true },
  { id: "ch3", name: "Chilli Chicken", price: 249, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop", rating: 4.6, category: "chinese", description: "Spicy Indo-Chinese chicken dish", veg: false },

  // South Indian
  { id: "si1", name: "Idli Sambar", price: 99, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop", rating: 4.4, category: "south-indian", description: "Steamed rice cakes with lentil soup", veg: true },
  { id: "si2", name: "Uttapam", price: 119, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop", rating: 4.2, category: "south-indian", description: "Thick pancake topped with vegetables", veg: true },

  // Combos
  { id: "co1", name: "Family Feast", price: 799, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop", rating: 4.8, category: "combos", description: "2 curries, rice, naan, dessert for 4", veg: false },
  { id: "co2", name: "Veg Thali", price: 299, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop", rating: 4.6, category: "combos", description: "Complete veg meal with 5 items", veg: true },
  { id: "co3", name: "Snack Box", price: 349, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", rating: 4.3, category: "combos", description: "Assorted snacks, fries, and a drink", veg: true },

  // Specials
  { id: "sp1", name: "Chef's Special Thali", price: 449, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop", rating: 4.9, category: "specials", description: "Today's special curated by our chef", veg: false },
  { id: "sp2", name: "Weekend Biryani Pot", price: 599, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop", rating: 4.8, category: "specials", description: "Slow-cooked biryani served in handi", veg: false },
];

export const categories = [
  { id: "veg", name: "Veg", icon: "🥬", color: "bg-green-100", path: "/veg" },
  { id: "non-veg", name: "Non-Veg", icon: "🍗", color: "bg-red-100", path: "/non-veg" },
  { id: "desserts", name: "Desserts", icon: "🍰", color: "bg-pink-100", path: "/desserts" },
  { id: "beverages", name: "Beverages", icon: "🥤", color: "bg-blue-100", path: "/categories" },
  { id: "combos", name: "Combos", icon: "🍱", color: "bg-yellow-100", path: "/categories" },
  { id: "fast-food", name: "Fast Food", icon: "🍔", color: "bg-orange-100", path: "/categories" },
  { id: "south-indian", name: "South Indian", icon: "🥘", color: "bg-amber-100", path: "/categories" },
  { id: "chinese", name: "Chinese", icon: "🥡", color: "bg-rose-100", path: "/categories" },
  { id: "specials", name: "Specials", icon: "⭐", color: "bg-purple-100", path: "/categories" },
];
