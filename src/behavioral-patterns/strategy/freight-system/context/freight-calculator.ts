import { FreightStrategy } from "../interfaces/freight-strategy";

export class FreightCalculator {
  private strategy: FreightStrategy;

  constructor(strategy: FreightStrategy) {
    this.strategy = strategy;
  }

  // Permite trocar o frete no meio da execução (ex: usuário mudou a opção no app)
  public setStrategy(strategy: FreightStrategy): void {
    this.strategy = strategy;
  }

  public calculate(weight: number): void {
    const cost = this.strategy.calculate(weight);
    console.log(`Custo do frete para ${weight}kg: R$ ${cost.toFixed(2)}`);
  }
}
