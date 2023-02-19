'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const newestRestaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numGuests: 5,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderPrices: {
    ingredients: {
      pasta: '$8.99',
      pizza: '12.99',
      salad: '4.99',
    },
  },
  orderDelivery: function ({
    starterIndex: starter,
    mainIndex,
    time,
    address,
  }) {
    console.log(
      `Order recieved! Your delivery ${this.starterMenu[starter]}, and ${this.mainMenu[mainIndex]}, will be delivered at ${time}, to ${address}`
    );
  },
  orderPasta: function (...order) {
    const [fullOrder] = order;
    console.log(fullOrder);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient), console.log(otherIngredients);
  },
};

// newestRestaurant.orderPasta({
//   Ing1: 'Pepper',

//   Ing2: 'Cheese',
//   Ing3: 'Noodles',
// });
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1?'),
//   prompt('Lets make pasta! Ingredient 2?'),
//   prompt('Lets make pasta! Ingredient 3?'),
// ];
// newestRestaurant.orderPasta(ingredients);

// SPREAD, becuase on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Arrays
const [pizza, , rissoto, ...otherFood] = [
  ...newestRestaurant.mainMenu,
  ...newestRestaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekDays } = newestRestaurant.openingHours;
console.log(sat, weekDays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 4, 2, 6, 9);
add(2, 3, 5);

const x = [23, 5, 7];
add(...x);
const { ...prices } = newestRestaurant.orderPrices.ingredients;
console.log(prices);

newestRestaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');

// Use ANY data type, return ANY data type, short circuiting
console.log('--------- OR ---------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
const guests1 = newestRestaurant.numGuests ? newestRestaurant.numGuests : 10;
console.log(guests1);
const guests2 = newestRestaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND --------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (newestRestaurant.orderPizza) {
  newestRestaurant.orderPizza('mushrooms', 'spinach');
}

newestRestaurant.orderPizza &&
  newestRestaurant.orderPizza('Mushrooms', 'Spinach');

// newestRestaurant.numGuests = 0;
newestRestaurant.numGuests = 0;
const guests = newestRestaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = newestRestaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',

  owner: 'Giovanni Rossi',
};
// OR ASSGINMENT OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR (Null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
// THE SPREAD OPERATOR (...)
// newestRestaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Objects
// const newerRestaurant = {
//   foundedIn: 1998,
//   ...newestRestaurant,
//   founder: 'Guiseppe',
// };
// console.log(newerRestaurant);

// const restaurantCopy = { ...newestRestaurant };
// restaurantCopy.restaurantName = 'Ristorante Roma';
// console.log(restaurantCopy);
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// const newMenu = [...newestRestaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...newestRestaurant.mainMenu];

// // Join 2 arrays
// const menu = [...newestRestaurant.mainMenu, ...newestRestaurant.starterMenu];

// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S. '];
// console.log(letters);

//   openingHours: hours,
//   categories: tags,
// } = newestRestaurant;
// console.log(newName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = newestRestaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 11;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
//////// DESTRUCTURING ARRAYS //////////
// const newArr = [5, 6, 7];
// const d = newArr[0];
// const e = newArr[1];
// const f = newArr[2];

// const [h, i, j] = newArr;
// console.log(h, i, j);

// let [main, , secondary] = newestRestaurant.categories;
// const [first] = newestRestaurant.categories;
// console.log(first);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Recieve 2 return values from a function

// const [starter, dinner] = newestRestaurant.order(2, 0);
// const nested = [2, 4, [5, 6]];
// const [x, y, z] = nested;
// console.log(x, y, z);

// // Default values
// const [p, q, r = 1] = [8, 9];
// console.log(p, q, r);
