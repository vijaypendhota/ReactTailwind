import banana from './assets/banana.jpg'
import carrot from './assets/carrot.jpg'
import cauliflower from './assets/cauliflower.jpg'
import chillies from './assets/chillies.jpg'
import potato from './assets/potato.jpg'
import tomato from './assets/tomato.jpg'
import apple from './assets/apple.jpg'
import orange from './assets/orange.jpg'
import grapes from './assets/grapes.jpg'
import capsicum from './assets/capsicum.jpg'
import mango from './assets/mango.jpg'
import onion from './assets/onion.jpg'



const products = [
  {
    id: 1,
    name: "Banana",
    category: "Fruit",
    price: 16,
    unit: "kg",
    image: banana,
    description: "Fresh, naturally sweet bananas rich in potassium and energy.",
    rating: 4.5,
    inStock: true,
    discount: 0
  },
  {
    id: 2,
    name: "Carrot",
    category: "Vegetable",
    price: 22,
    unit: "kg",
    image: carrot,
    description: "Crunchy carrots loaded with beta-carotene and vitamins.",
    rating: 4.3,
    inStock: true,
    discount: 5
  },
  {
    id: 3,
    name: "Cauliflower",
    category: "Vegetable",
    price: 25,
    unit: "kg",
    image: cauliflower,
    description: "Farm-fresh cauliflower perfect for curries and stir-fries.",
    rating: 4.2,
    inStock: true,
    discount: 0
  },
  {
    id: 4,
    name: "Chillies",
    category: "Vegetable",
    price: 30,
    unit: "kg",
    image: chillies,
    description: "Spicy green chillies to add heat and flavor to your dishes.",
    rating: 4.1,
    inStock: true,
    discount: 10
  },
  {
    id: 5,
    name: "Potato",
    category: "Vegetable",
    price: 16,
    unit: "kg",
    image: potato,
    description: "Versatile potatoes ideal for frying, boiling, and curries.",
    rating: 4.4,
    inStock: true,
    discount: 0
  },
  {
    id: 6,
    name: "Tomato",
    category: "Vegetable",
    price: 26,
    unit: "kg",
    image: tomato,
    description: "Juicy red tomatoes perfect for salads and cooking.",
    rating: 4.3,
    inStock: true,
    discount: 5
  },
  {
    id: 7,
    name: "Apple",
    category: "Fruit",
    price: 100,
    unit: "kg",
    image: apple,
    description: "Crisp and sweet apples packed with fiber and antioxidants.",
    rating: 4.6,
    inStock: true,
    discount: 10
  },
  {
    id: 8,
    name: "Orange",
    category: "Fruit",
    price: 60,
    unit: "kg",
    image: orange,
    description: "Juicy oranges rich in vitamin C and refreshing taste.",
    rating: 4.4,
    inStock: true,
    discount: 0
  },
  {
    id: 9,
    name: "Mango", 
    category: "Fruit",
    price: 80,
    unit: "kg",
    image: mango,
    description: "Sweet and aromatic mangoes, the king of fruits.",
    rating: 4.8,
    inStock: false,
    discount: 15
  },
  {
    id: 10,
    name: "Grapes",
    category: "Fruit",
    price: 70,
    unit: "kg",
    image: grapes,
    description: "Fresh seedless grapes, perfect for snacking.",
    rating: 4.5,
    inStock: true,
    discount: 0
  },
  {
    id: 11,
    name: "Onion",
    category: "Vegetable",
    price: 28,
    unit: "kg",
    image: onion,
    description: "Essential cooking onions with strong flavor and aroma.",
    rating: 4.2,
    inStock: true,
    discount: 5
  },
  {
    id: 12,
    name: "Capsicum",
    category: "Vegetable",
    price: 45,
    unit: "kg",
    image: capsicum,
    description: "Fresh green capsicum ideal for salads and stir-fries.",
    rating: 4.3,
    inStock: true,
    discount: 0
  }
];

export default products;
