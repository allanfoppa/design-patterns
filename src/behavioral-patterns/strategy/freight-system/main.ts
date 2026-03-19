import { FreightCalculator } from "./context/freight-calculator";
import { SedexStrategy } from "./strategies/sedex-strategy";
import { PacStrategy } from "./strategies/pac-strategy";
import { ShipStrategy } from "./strategies/ship-strategy";

const productWeight = 10; // 10kg

// First option: PAC
const calc = new FreightCalculator(new PacStrategy());
console.log("--- Opção: PAC ---");
calc.calculate(productWeight);

// Changing to SEDEX
calc.setStrategy(new SedexStrategy());
console.log("\n--- Opção: SEDEX ---");
calc.calculate(productWeight);

// Changing to SHIP
calc.setStrategy(new ShipStrategy());
console.log("\n--- Opção: SHIP ---");
calc.calculate(productWeight);
