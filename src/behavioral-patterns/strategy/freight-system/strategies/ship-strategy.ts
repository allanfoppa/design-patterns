import { FreightStrategy } from "../interfaces/freight-strategy";

export class ShipStrategy implements FreightStrategy {
  calculate(weight: number): number {
    return 2.0 + weight * 0.5;
  }
}
