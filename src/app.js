/* var sayi1 = 10;
sayi1 = "Hello World!";
console.log(sayi1); */

let student = { id: 1, name: "Berk" };
/* console.log(student); */

function save(score = 10, entity) {
  console.log(entity.name + " saved " + score);
}

//save(undefined, student);

let students = ["Berk Karanfil", "Erkin Dara", "Rafi Er"];
/* console.log(students); */

let students2 = [
  student,
  { id: 2, name: "Ekin" },
  "Ankara",
  { city: "İstanbul" },
];
//console.log(students2);

/* REST */
let showProducts = function (id, ...products) {
  console.log(id);
  console.log(products);
};

//console.log(typeof showProducts);

//showProducts(10, "Elma", "Armut", "Karpuz");

/* SPREAD */
let scores = [1, 2, 3, 4, 5, 12, 6, 14, 25];

console.log(Math.max(...scores));
console.log(..."ABC", "D", ..."EFG", "H");

/* Destructuring */
let populations = [10000, 20000, 30000, [40000, 10000]];
let [small, medium, high, [veryHigh, maximum]] = populations;

function someFunction([small1]) {
  console.log(small1);
}
someFunction(populations);

let category = { id: 1, name: "İçecek" };
console.log(category.id);
console.log(category["name"]);

let { id, name } = category;
console.log(id, name);

/* Redux */
