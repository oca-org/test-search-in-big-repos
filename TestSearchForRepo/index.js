const branches = require("./branchNames.json");

const { testSearchForRepos } = require('./testSearchForRepos');

const args = process.argv.slice(2);

const { exec } = require("child_process");

const repository = args[1];


exec("git checkout " + branches[repository])

if (args.length === 0) {
        throw new Error('No repository provided.');
}
const directoryPath = args[0];
const searchWords = [
        "Apple",
        "Banana",
        "Cat",
        "Dog",
        "Elephant",
        "Fish",
        "Guitar",
        "Hat",
        "Ice cream",
        "Jellyfish",
        "Kangaroo",
        "Lemon",
        "Moon",
        "Ninja",
        "Orange",
        "Pizza",
        "Quilt",
        "Rainbow",
        "Strawberry",
        "Tiger",
        "Umbrella",
        "Violin",
        "Whale",
        "Xylophone",
        "Yo-yo",
        "Zebra",
        "Airplane",
        "Bicycle",
        "Car",
        "Dolphin",
        "Eagle",
        "Flower",
        "Giraffe",
        "Horse",
        "Ice",
        "Jacket",
        "Kite",
        "Lion",
        "Mountain",
        "Nose",
        "Owl",
        "Pencil",
        "Queen",
        "Robot",
        "Sun",
        "Tree",
        "Umbrella",
        "Violin",
        "Watermelon",
        "X-ray",
        "Yacht",
        "Zoo",
        "Ant",
        "Bear",
        "Cake",
        "Duck",
        "Elephant",
        "Fox",
        "Grapes",
        "Hat",
        "Insect",
        "Jug",
        "Kiwi",
        "Lemon",
        "Mouse",
        "Nest",
        "Octopus",
        "Penguin",
        "Quail",
        "Rabbit",
        "Snake",
        "Tiger",
        "Unicorn",
        "Vase",
        "Walrus",
        "Xylophone",
        "Yak",
        "Zebra",
        "Ball",
        "Carrot",
        "Dinosaur",
        "Egg",
        "Fish",
        "Guitar",
        "Hamburger",
        "Island",
        "Jellyfish",
        "Kite",
        "Lollipop",
        "Monkey",
        "Noodle",
        "Oxygen",
        "Pirate",
        "Quilt",
        "Rain",
        "Star",
        "Train",
        "Umbrella",
        "Vegetable",
        "Water",
        "X-ray",
        "Yoga",
        "Zombie"
];

const start = Date.now();

const results = testSearchForRepos(directoryPath, searchWords);

const end = Date.now();
console.log(`Execution time: ${end - start}ms`);