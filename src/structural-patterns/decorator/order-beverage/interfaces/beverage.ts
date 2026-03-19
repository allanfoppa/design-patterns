// Defines what a beverage should implement/have.
export interface Beverage {
  getDescription(): string;
  cost(): number;
}
