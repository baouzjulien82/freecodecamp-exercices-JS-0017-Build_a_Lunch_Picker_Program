

const lunches = [];
// ajouter un lunch à la fin du tableau
const addLunchToEnd = (array, string) => {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return array;
};
// ajouter un lunch au début du tableau
const addLunchToStart = (array, string) => {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
};
// supprimer un lunch de la fin du tableau
const removeLastLunch = (array) => {
  if(array.length) {
  let deletedItem = array.pop();
  console.log(`${deletedItem} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};
// supprimer un lunch du début du tableau
const removeFirstLunch = (array) => {
  if(array.length) {
  let deletedItem = array.shift();
  console.log(`${deletedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
};
// random select a lunch
const getRandomLunch = (array) => {
  if(array.length) {
    console.log(`Randomly selected lunch: ${array[Math.floor(Math.random() * array.length)]}`);
  } else {
    console.log("No lunches available.");
  }
};

// show lunchMenu
const showLunchMenu = (array) => {
  if(array.length) {
    console.log(`Menu items: ${array.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
};
