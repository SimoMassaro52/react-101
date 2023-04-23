//This module is going to recap shortly JS classes and how to initialize them to get ready for their use in React
// Classes in JS are basically containers for functions and variables which work together to accomplish a certain task
// Think of it as a blueprint for creating new objects that share common properties and behaviors
//It doesn't stop there of course, classes are generally great for organizing code and mantaining it in extensive projects

//Our example will be creating a rudimental RPG game
//For now our game will contain only 2 characters, an enemy (Goblin) and our hero protagonist
//They will share some similarities so we can use a Character class to initialize them more efficiently

class Character {
	//We can hard-code variables that the objects derived from the class will have by default
	alive = true;

	//Or, more commonly, we can set up constructors
	//Constructors are at the core of the class functionality
	//They are functions that take in parameters used to "construct" our objects more efficiently
	//In this case we gave a default int value to the characters hp
	constructor(initialHp = 100) {
		//The keyword this will refer to the object
		this.hp = initialHp;
	}

	//We can set up as many functions as we want
	updateHp(amount) {
		//Support variable to calculate the new HP
		const calc = this.hp + amount;
		//When our character's health reaches or goes past 0, we will switch the alive variable to false, otherwise, we will update our existing variable
		if (calc <= 0) {
			//RPG game health points usually stop before negative integers
			this.hp = 0;
			this.alive = false;
		} else {
			this.hp = calc;
		}
	}
}

//Now that we have our class, we can use it to build new subclasses that will be used to create objects
class Hero extends Character {
	constructor(hp) {
		//The super keyword allows us to "call" the constructor of the parent class to use its properties and methods. It basically re runs the parent's constructor and we can pass it whatever we want
		super(hp);
	}
	//Our inventory will initialize as an empty array
	inventory = [];

	//The hero will have a defeat enemy function that will push any loot it has got into our inventory
	defeatEnemy(enemy) {
		if (enemy.lootToDrop) {
			this.inventory.push(enemy.lootToDrop);
		}
		enemy.updateHp(enemy.hp * -1);
	}
}

//Our enemy will also have some loot on top of the hp
class Enemy extends Character {
	constructor(hp, lootToDrop) {
		super(hp);
		this.lootToDrop = lootToDrop;
	}
}

//Now we are all set to instate our objects

//We will give our hero 100 hp
const knight = new Hero(100);

//And our enemy goblin will also have 100 hp plus some loot (a string)
const slime = new Enemy(100, "Wooden Sword");

document.getElementById("hero-hp").innerHTML = knight.hp;
document.getElementById("hero-inv").innerHTML = knight.inventory;
document.getElementById("hero-stat").innerHTML = knight.alive;

document.getElementById("enemy-hp").innerHTML = slime.hp;
document.getElementById("enemy-inv").innerHTML = slime.lootToDrop;
document.getElementById("enemy-stat").innerHTML = slime.alive;

// Now we will run our methods to let the battle play out
function battle() {
	knight.defeatEnemy(slime);
	document.getElementById("hero-hp").innerHTML = knight.hp;
	document.getElementById("hero-inv").innerHTML = knight.inventory;
	document.getElementById("hero-stat").innerHTML = knight.alive;

	document.getElementById("enemy-hp").innerHTML = slime.hp;
	document.getElementById("enemy-inv").innerHTML = slime.lootToDrop;
	document.getElementById("enemy-stat").innerHTML = slime.alive;
}
