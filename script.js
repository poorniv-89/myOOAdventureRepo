//Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["hat", "sunglasses"]
        },
        type: "Cat"
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

console.log(adventurer.companion.companion.belongings[1]);

//Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.companion.roll();
// robin.companion.companion.roll();

//Part 3: Class Features
class Adventurer extends Character {
    constructor(name, role, level, stamina) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        this.level = level;
        this.stamina = stamina;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    attack() {
        if (this.stamina > 50) {
            console.log(`${this.name} still has ${this.stamina} percent stamina to attack`);
        }
        else {
            console.log(`${this.name} is too tired to attack. Stamina is low.`);
        }
    }
}
  class Companion {
    constructor(name, type, companion) {
        this.name = name;
        this.type = type;
        this.companionName = companion[0];
        this.companionType = companion[1];
        this.companionInventory = companion[2];
    }
    follow() {
        console.log(`${this.name} the ${this.type} is following you.`);
      }
    
    rest() {
        console.log(`${this.name} the ${this.type} is resting.`);
      }
}

const robin = new Adventurer("Robin", "warrior", 20, 78);
robin.roll();
robin.scout();
robin.attack();

const leo = new Companion("Leo", "Cat", ["Frank", "Flea", ["hat", "sunglasses"]])
const pickles = new Companion("pickles", "bird", ["bleuberry", "bird", ["binoculars", "sunglasses"]])
console.log(leo, pickles);
leo.rest();
pickles.follow();
