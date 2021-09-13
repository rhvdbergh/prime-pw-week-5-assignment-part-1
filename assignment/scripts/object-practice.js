console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Ronald',
  lastName: 'van der Bergh',
  hasSiblings: true,
  shoeCount: 8, // this appears to be pairs of shoes. :)
  favThreeFoods: ['bbq', 'pizza', 'chicken korma']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

const fullName = me.firstName + ' ' + me.lastName;
console.log('My full name is:', fullName);



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/

console.log('My first favorite food is:', me.favThreeFoods[0]);
console.log('My last favorite foods is:', me.favThreeFoods[me.favThreeFoods.length - 1]);
// in case someone adds another favorite food, the above will always be the last entry in the array
// although the name is favThreeFoods, so I guess that's improbable
// could also be console.log(me.favThreeFoods[2]);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/

console.log(`I have ${me.shoeCount} pairs of shoes`);
me.shoeCount++; // another pair of shoes added! could also be me.shoeCount = me.shoeCount + 1;
console.log(`Huzzah! I just got one more pair of shoes and now I have ${me.shoeCount} pairs of shoes`);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'green';
console.log('I discovered something more about myself: I have a favorite color! This is what I know about myself now:', me);