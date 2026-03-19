import { AddonDecorator } from "../addon-decorator";

export class MilkDecorator extends AddonDecorator {
  getDescription(): string {
    return `${this.beverage.getDescription()} + Milk`;
  }

  cost(): number {
    return this.beverage.cost() + 0.5; // Adding the cost of milk to the base beverage in this case simple coffee
  }
}
