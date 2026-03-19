import { Beverage } from "../interfaces/beverage";

export class SimpleCoffee implements Beverage {
  getDescription(): string {
    return "Simple Coffee";
  }

  cost(): number {
    return 2.0;
  }
}
