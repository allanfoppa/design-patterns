import { AddonDecorator } from "../addon-decorator";

export class ChocolateDecorator extends AddonDecorator {
  getDescription(): string {
    return `${this.beverage.getDescription()} + Chocolate`;
  }

  cost(): number {
    return this.beverage.cost() + 3.0; // Adding the cost of chocolate to the base beverage in this case simple coffee
  }
}
