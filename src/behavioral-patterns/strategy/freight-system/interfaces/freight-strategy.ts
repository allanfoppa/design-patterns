export interface FreightStrategy {
  calculate(weight: number): number;
}
