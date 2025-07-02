import './style.css';
import restaurantPhoto from './restaurant.jpg';

const contentBox = document.querySelector('#content');

const restaurantImg = document.createElement('img');
restaurantImg.src = restaurantPhoto;
restaurantImg.alt = 'A picture of a dining room';
restaurantImg.height = '200';

const restaurantTitle = document.createElement('h1');
restaurantTitle.textContent = 'The Hungry Elephant';

const restaurantBlurbOne = document.createElement('p');
restaurantBlurbOne.textContent = `We're excited to have you come visit The Hungry Elephant! Since 2018, we have been serving SLC's best traditional and non-traditional sandwiches and have no intention of slowing down now!`;

const restaurantBlurbTwo = document.createElement('p');
restaurantBlurbTwo.textContent = `Be sure to check out our monthly special - a locally inspired sandwich sure to become one of your new favorites!`;

        
contentBox.appendChild(restaurantImg);
contentBox.appendChild(restaurantTitle);
contentBox.appendChild(restaurantBlurbOne);
contentBox.appendChild(restaurantBlurbTwo);