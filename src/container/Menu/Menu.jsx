import React from 'react';
import './Menu.css';
import {images} from '../../constants';
import { MenuHeader, MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => {
  const breakfastItems = [
    {
      name: 'Frittata',
      description: 'An Italian egg dish, frittata is a savory omelette often filled with vegetables, cheese, and herbs, baked or fried until golden.',
      price: 119,
      image: images.frittata,
    },
    {
      name: 'Cannoli',
      description: 'A classic Sicilian dish, cannoli consists of crispy pastry tubes filled with sweet ricotta cheese, often adorned with chocolate chips and pistachios.',
      price: 89,
      image: images.cannoli,
    },
    {
      name: 'Cornetti',
      description: 'Italian crescent-shaped pastries, similar to croissants, with a flaky texture, typically enjoyed for breakfast and often filled with cream or jam.',
      price: 89,
      image: images.cornetti,
    },
    {
      name: 'Crepes',
      description: 'A thin pancake, crepes are versatile and can be filled with various sweet or savory ingredients, such as Nutella, fruits, or cheese.',
      price: 129,
      image: images.crepe,
    },
    {
      name: 'Biscotti',
      description: 'Italian almond biscuits, biscotti are twice-baked, resulting in a crunchy texture, and commonly paired with coffee.',
      price: 79,
      image: images.biscotti,
    },
  ]
  const lunchItems = [
    {
      name: 'Pesto Pasta',
      description: 'A flavorful Italian dish, pesto pasta features pasta coated in a vibrant sauce made from basil, pine nuts, Parmesan cheese, garlic, and olive oil.',
      price: 229,
      image: images.pesto,
    },
    {
      name: 'Pasta Carbonara',
      description: 'An Italian pasta dish, carbonara features spaghetti or rigatoni with a creamy sauce made from eggs, cheese, pancetta, and black pepper.',
      price: 239,
      image: images.carbonara,
    },
    {
      name: 'Pizza Margherita',
      description: 'A classic Italian pizza, the Margherita is topped with simple ingredients like tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.',
      price: 239,
      image: images.margherita,
    },
    {
      name: 'Calzone',
      description: 'A folded pizza, calzone is stuffed with various ingredients like cheese, vegetables, and meat, providing a portable and hearty meal.',
      price: 189,
      image: images.calzone,
    },
    {
      name: 'Risotto',
      description: 'A creamy Italian rice dish, risotto is cooked slowly with broth until it reaches a rich consistency, often combined with ingredients like mushrooms or seafood.',
      price: 199,
      image: images.risotto,
    },
  ]
  const dessertItems = [
    {
      name: 'Panna Cotta',
      description: 'An Italian creamy dessert, pannacotta is a set custard often flavored with vanilla, served with fruit coulis or caramel sauce.',
      price: 149,
      image: images.pannacotta,
    },
    {
      name: 'Tiramisu',
      description: 'A popular Italian dessert, tiramisu features layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.',
      price: 179,
      image: images.tiramisu,
    },
    {
      name: 'Gelato',
      description: 'Italian ice cream, gelato is known for its smooth and dense texture, with a lower fat content than traditional ice cream, and comes in various flavors.',
      price: 119,
      image: images.gelato,
    },
    {
      name: 'Espresso',
      description: 'A strong and concentrated coffee, espresso is brewed by forcing hot water through finely-ground coffee beans, providing a quick and intense caffeine boost.',
      price: 59,
      image: images.espresso,
    },
    {
      name: 'Latte',
      description: 'A coffee beverage made with espresso and steamed milk, a latte is often topped with a small amount of frothed milk, resulting in a creamy and mild flavor.',
      price: 89,
      image: images.latte,
    },
  ]
  return( 
    <div className='menu-page'>
      <div className='heading'>
        <MenuHeader/>
        <SubHeading title={"Breakfast"} id={'breakfast'}/>
        <div className='container'>
          {breakfastItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
        <SubHeading title={"Lunch and Dinner"} id={'lunch'}/>
        <div className='container'>
          {lunchItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
        <SubHeading title={"Dessert and Drinks"} id={'beverages'}/>
        <div className='container'>
          {dessertItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
      </div>
    </div>
)};

export default SpecialMenu;
