# Adapter Pattern: Step-by-Step Flow

## 1. The Target (Your Interface)

- **Who:** `PaymentProcessor`
- **Responsibility:** This defines the domain-specific interface that your application actually uses. It is the **"standard"** your code expects.
- **Analogy:** This is the **Standard Wall Outlet** in your house. Your vacuum cleaner (client code) only knows how to plug into this specific shape.

---

## 2. The Adaptee (The Third-Party)

- **Who:** `PayPalSDK`, `MercadoPagoSDK`
- **Responsibility:** This is the useful service or library that has an **incompatible interface**. It has the functionality you need, but its "plug" doesn't fit your "outlet."
- **Problem:** It might use different method names (e.g., `sendMoney` instead of `processPayment`) or different data formats (e.g., strings instead of numbers).

---

## 3. The Adapter (The Translator)

- **Who:** `PayPalAdapter`, `MercadoPagoAdapter`
- **Responsibility:** This is the **Bridge**. It implements the `Target` interface but wraps the `Adaptee` inside.
- **The Magic:** When the client calls the standard method, the Adapter "translates" that call into a format the Adaptee understands. It handles data conversion, renaming methods, and mapping parameters.

---

## 4. The Client (Your Application)

- **Who:** `CheckoutService`, `OrderManager`
- **Responsibility:** It only works with objects that follow the `Target` interface.
- **Benefit:** The Client doesn't need to know that a complex, messy third-party library is working behind the scenes. It just calls the standard method it knows.

---

# Call Flow (The Execution)

### 1. The Setup (Initialization)

- You instantiate the "weird" third-party library:
  `const externalSDK = new PayPalSDK();`
- You wrap it in the adapter:
  `const processor = new PayPalAdapter(externalSDK);`

### 2. The Client Call

- Your system calls the standard method:
  `processor.processPayment(100.00);`

### 3. Inside the Adapter

- The Adapter receives the `100.00` (number).
- It performs any necessary **"translation."** For example, if the SDK requires an object, it creates:
  ```json
  {
    "amount": "100.00",
    "currency": "USD"
  }
  ```
