const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.


// a)
console.log(`a) Las pizzas que tienen identificador impar son:`)

pizzas.forEach(pizza => {
  if(pizza.id%2!==0){
    console.log(pizza.nombre)
  }
});
// for(let i=0;i<pizzas.length;i++){
//   if(pizzas[i].id%2!==0){
//     console.log(pizzas[i].nombre)

//   }
// }

// b)

console.log(`b) Las pizzas que valen menos de $600 son:`)
pizzas.forEach(pizza =>{

  if(pizza.precio<600){
    console.log(pizza.nombre)
  }

})
// c)

console.log(`c) Información de las pizzas:`)
pizzas.forEach((pizza) =>{

  console.log(`La ${pizza.nombre} vale $${pizza.precio}`)

})
// d)

console.log(`d) Ingredientes de las pizzas:`)


pizzas.forEach(pizza =>{
  console.log(`La ${pizza.nombre} tiene:`)
  let i=0
  while(i<pizza.ingredientes.length){
    console.log(pizza.ingredientes[i])
    i++
  }

})
