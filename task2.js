let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(function (animal){
  return animal.charAt(0)=='b';
})

console.log(bListAnimals);