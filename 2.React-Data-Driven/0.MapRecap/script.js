

// These are going to be some challenges to learn or relearn how to use array.map() which is a fundamental method for turning regular JavaScript data and turning it into JSX elements

// .map() works a lot like foreach but it also returns a new array populated with the result of applying a function on every element in the called array

// map((el, index, array)) =>



//Example 
//Given the array "numbers" multiply every number by 2 and return the resulting array

const numbers = [1, 4, 5, 9, 12];
document.getElementById('numbers').innerHTML = numbers;

//We are going to create a new array which will be equivalent to numbers with the map method applied the operation

const numbersByTwo = numbers.map(x => x * 2);

document.getElementById('example').innerHTML = numbersByTwo;



//Challenge 1
//Given an array of numbers, return an array of each number, squared
//For the purpose of clarity, we are going to see another way to write the map operation

const nums = [1, 2, 3, 4, 5];
document.getElementById('nums').innerHTML = nums;

//We basically passed the longer function syntax

const numsSquared = nums.map(function(el){
    return el * el
})
//or
// const numsSquared = nums.map(el => el * el);

document.getElementById('squared').innerHTML = numsSquared;



//Challenge 2
//Given an array of strings, return an array of strings where the first letter of each one is capitalized
//This time we will write the function as an arrow function

const names = ["alice", "bob", "charlie", "danielle"];
document.getElementById('names').innerHTML = names;

const namCap = names.map((el) =>{
    //We are returning of course the first value of el capitalized plus el without the first letter, result of slicing the characters starting from the second one
    return el[0].toUpperCase() + el.slice(1);
})

document.getElementById('namCap').innerHTML = namCap;



//Challenge 3
//Given an array of strings, return an array of strings where each one is wrapped in <p> tags
//This time we are going to shorten the function further without the return like we did in the first example and also without wrapping the passed value el in parenthesis

// e.g. Bulbasaur = <p>Bulbasaur</p>

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
document.getElementById('pokemon').innerHTML = pokemon;

const pPokp = pokemon.map(el => '&lt;p&gt;' + el + '&lt;/p&gt;')

document.getElementById('pPokp').innerHTML = pPokp;

