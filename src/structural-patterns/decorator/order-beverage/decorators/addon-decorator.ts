import { Beverage } from "../interfaces/beverage";

// Makes sure that all addons (milk, sugar, etc.) are also considered a beverage, allowing them to be decorated as well.
export abstract class AddonDecorator implements Beverage {
  protected beverage: Beverage;

  constructor(beverage: Beverage) {
    this.beverage = beverage;
  }

  abstract getDescription(): string;
  abstract cost(): number;
}
