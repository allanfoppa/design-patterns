# Strategy Pattern: Step-by-Step Flow

## 1. The Strategy (The Interface)

- **Who:** `freight-strategy.ts`
- **Responsibility:** It defines the "contract" for the algorithm. It tells the Context: _"I don't care how you calculate it, but you must have a method called `calculate` that receives a weight and returns a number."_
- **Analogy:** Think of this as a **Universal Plug**. It doesn't matter if the power comes from a battery, a solar panel, or a wall outlet; as long as it fits the plug, the device works.

---

## 2. Concrete Strategies (The Algorithms)

- **Who:** `sedex-strategy.ts`, `pac-strategy.ts`, `ship-strategy.ts`
- **Responsibility:** These are the actual "engines." Each class contains one specific logic for calculating the price.
- **Key Point:** They are completely decoupled. The logic for "Sedex" doesn't know "PAC" exists.
- **Analogy:** These are different **GPS Routes**. One is the fastest, one is the shortest, and one avoids tolls. They all get you to the destination, but the "math" inside is different.

---

## 3. The Context (The Manager)

- **Who:** `freight-calculator.ts`
- **Responsibility:** This is the class your app actually talks to. It **has a** reference to a Strategy object.
- **The Magic:** It doesn't have a single `if` or `switch` to decide the price. It simply delegates the work: `this.strategy.calculate(weight)`.
- **Flexibility:** It allows switching the "engine" at runtime via a `setStrategy()` method.

---

## 4. The Client (The Execution)

- **Who:** `main.ts`
- **Responsibility:** The client is the "boss." It looks at the user's choice (e.g., a dropdown menu) and gives the correct Strategy to the Context.
- **Benefit:** If you want to add "Drone Delivery" tomorrow, you just create `drone-strategy.ts`. You **zero-touch** the existing `freight-calculator.ts`.

---

# Call Flow (The Execution)

### 1. Initialization

The client creates the Context and picks an initial strategy:

```typescript
import { FreightCalculator } from "./context/freight-calculator.js";
import { PacStrategy } from "./strategies/pac-strategy.js";

const calculator = new FreightCalculator(new PacStrategy());
```
