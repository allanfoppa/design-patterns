import { FreightStrategy } from "../interfaces/freight-strategy";

export class SedexStrategy implements FreightStrategy {
  calculate(weight: number): number {
    return 10.0 + weight * 5.0;
  }
}
