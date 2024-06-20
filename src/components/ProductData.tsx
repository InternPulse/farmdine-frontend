// productsData.ts
import cabbage from '../assets/images/cabbage.jpg'
import apple from '../assets/images/apple_fruit.jpeg'
import tomatoe from '../assets/images/tomatoe.jpeg'
import banana from '../assets/images/banana.jpeg'
import carrort from '../assets/images/carrots.jpeg'
import broccoli from '../assets/images/broccoli.jpeg'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Cabbage',
      price: 50.00,
      image: cabbage
    },
    {
      id: 2,
      name: 'Tomato',
      price: 30.00,
      image: tomatoe
    },
    {
      id: 3,
      name: 'Apple',
      price: 25.00,
      image: apple
    },
    {
      id: 4,
      name: 'Banana',
      price: 15.00,
      image: banana
    },
    {
      id: 5,
      name: 'Carrot',
      price: 20.00,
      image: carrort
    },
    {
      id: 6,
      name: 'Broccoli',
      price: 35.00,
      image: broccoli
    },
    {
      id: 7,
      name: 'Cabbage',
      price: 50.00,
      image: cabbage
    },
    {
      id: 8,
      name: 'Apple',
      price: 25.00,
      image: apple
    },
    {
      id: 9,
      name: 'Tomato',
      price: 30.00,
      image: tomatoe
    },
    {
      id: 10,
      name: 'Banana',
      price: 15.00,
      image: banana
    },
    {
      id: 11,
      name: 'Carrot',
      price: 20.00,
      image: carrort
    },
    {
      id: 12,
      name: 'Apple',
      price: 25.00,
      image: apple
    },
    {
      id: 13,
      name: 'Cabbage',
      price: 50.00,
      image: cabbage
    },
    {
      id: 14,
      name: 'Carrot',
      price: 20.00,
      image: carrort
    },
    {
      id: 15,
      name: 'Apple',
      price: 25.00,
      image: apple
    },
    {
      id: 16,
      name: 'Broccoli',
      price: 35.00,
      image: broccoli
    },
    {
      id: 17,
      name: 'Cabbage',
      price: 50.00,
      image: cabbage
    },
    {
      id: 18,
      name: 'Banana',
      price: 15.00,
      image: banana
    },
    {
      id: 19,
      name: 'Tomato',
      price: 30.00,
      image: tomatoe
    },
    {
      id: 20,
      name: 'Carrot',
      price: 20.00,
      image: carrort
    },
  ];
  
  export default products;
  