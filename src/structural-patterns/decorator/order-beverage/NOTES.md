# Decorator Pattern: Step-by-Step Flow

## 1. The Component (The Interface)

- **Who:** `Beverage`
- **Responsibility:** This is the common contract. It defines the basic operations that both the "pure" object and the "decorators" must implement.
- **Analogy:** Think of this as the **Empty Cup**. It defines that whatever you serve must have a description and a price, regardless of what's inside.

---

## 2. The Concrete Component (The Core | Components)

- **Who:** `SimpleCoffee`
- **Responsibility:** This is the base object that you are going to wrap. It provides the default behavior.
- **Key Point:** It is the **"heart" of the onion**. It doesn't know about any decorators; it just does its single job (e.g., serving plain coffee).

---

## 3. The Base Decorator (The Wrapper | Decorators)

- **Who:** `AddonDecorator` or `BaseDecorator`
- **Responsibility:** This is an abstract class that **implements** the Component interface AND **contains** an instance of it (Composition).
- **The Magic:** Its primary job is to maintain a reference to the "wrapped" object (`wrappee`). By default, it simply delegates all calls to that object.
- **Analogy:** This is the **Cup Sleeve**. It fits around the cup and allows you to attach more things to it.

---

## 4. Concrete Decorators (The Layers | Implementations)

- **Who:** `MilkDecorator`, `ChocolateDecorator`
- **Responsibility:** These are the actual "features" or "addons." They extend the Base Decorator.
- **Logic Flow:** They override the methods to add their own behavior **before** or **after** calling the wrapped object.
  - _Example (Cost):_ Returns `this.wrappee.cost() + 2.00`.
  - _Example (Description):_ Returns `this.wrappee.getDescription() + ", Milk"`.
- **Analogy:** These are the **Toppings** (Milk, Sugar, Sprinkles). Each one adds its own flavor and price to the total.

---

# Call Flow (The Execution)

### 1. The Assembly (Stacking)

The client "wraps" the objects like a Russian Matryoshka doll (Boneca russa):

```typescript
let order = new SimpleCoffee(); // Core
order = new MilkDecorator(order); // Layer 1
order = new ChocolateDecorator(order); // Layer 2
```
