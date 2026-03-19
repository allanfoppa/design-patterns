import { FreightStrategy } from "../interfaces/freight-strategy";

export class PacStrategy implements FreightStrategy {
  calculate(weight: number): number {
    return 5.0 + weight * 2.0;
  }
}
