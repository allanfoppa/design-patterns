import { SimpleCoffee } from "./components/simple-coffee";
import { MilkDecorator } from "./decorators/implementations/milk-decorator";
import { ChocolateDecorator } from "./decorators/implementations/chocolate-decorator";

// 1. Simple coffee
let myCoffee = new SimpleCoffee();
console.log(`${myCoffee.getDescription()} -> R$ ${myCoffee.cost().toFixed(2)}`);

// 2. Add milk
myCoffee = new MilkDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} -> R$ ${myCoffee.cost().toFixed(2)}`);

// 3. Add chocolate
myCoffee = new ChocolateDecorator(myCoffee);
console.log(`${myCoffee.getDescription()} -> R$ ${myCoffee.cost().toFixed(2)}`);
