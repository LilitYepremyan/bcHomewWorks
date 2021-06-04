class Coffeshop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.order = [];
  }
  addOrder = (item) => {
    if (this.menu.some((i) => i.name === item)) {
      this.order.push(item);
      return;
    }
    return console.log("This item is currently unavailable!");
  };
  fullFillOrder = () => {
    if (this.order.length) {
      let item = this.order.shift();
      return ` This ${item} is ready`;
    }
    return "All orders have been fulfilled!";
  };

  listOrders = () => {
    return this.order;
  };

  dueAmount = () => {
    let total = 0;
    for (let n of this.order) {
      total += this.menu.find((item) => item.name === n).price;
    }
    return total;
  };
  cheapesItem = () => {
    let menu = [...this.menu];
    return menu.sort((a, b) => a.price - b.price)[0].price;
  };
  drinksOnly = () => {
    return this.menu.reduce((a, b) => {
      if (b.type === "drink") {
        a.push(b.name);
      }
      return a;
    }, []);
  };
  foodOnly = () => {
    return this.menu.reduce((a, b) => {
      if (b.type === "food") {
        a.push(b.name);
      }
      return a;
    }, []);
  };
}

const menu = [
  { name: "Pizza", type: "food", price: 100 },
  { name: "Pasta", type: "food", price: 200 },
  { name: "Tomato", type: "drink", price: 50 },
  { name: "Tan", type: "drink", price: 50 },
];

let tsc = new Coffeshop("Gilza", menu);

tsc.addOrder("Pizza");
tsc.addOrder("Bread");
tsc.addOrder("Coffe");
tsc.addOrder("Pasta");
// console.log(tsc.fullFillOrder());
console.log(tsc.listOrders());
console.log(tsc.dueAmount());
console.log(tsc.drinksOnly());
console.log(tsc.foodOnly());
console.log(tsc.cheapesItem());

// class Coffeshop {
//   constructor(name,menu){
//     this.name = name
//     this.menu= menu
//     this.order = []
//   }
//   addOrder=(item)=>{
//     if(this.menu.some((i)=>i.name = item)){
//       return this.order.push(item)
//     }
//     return console.log("This item is currently unavailable!")
//   }
//   fullFillOrder=()=>{
//     if(this.order.length){
//       let a = this.order.shift()
//       return ` This ${item} is ready`
//     }
//     return "All orders have been fulfilled!"
//   }
//   listOrders = ()=>{
//     return this.order
//   }
//   dueAmount= ()=>{
//     for(let n of name ){
//       total+= this.menu.find((item)=>item.name === n).price
//     }
//   }
//   cheapesItem=()=>{
//     let minPrice= [...menu]
//     return minPrice.sort((a,b)=>a.price-b.price)[0].price
//   }
//   drinksOnly=()=>{
//     let res = []
//     return this.menu.reduce((a,b)=>{
//       if(b.type === "food"){
//         res.push(b.name)
//       }
//       return res
//     },[])
//   }
// }
// const menu = [
//   {name:"Milk",type:"food",price:120}
// ]
// let aba = new Coffeshop ("Gilza",menu)
