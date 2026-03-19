import { PaymentProcessor } from "../interfaces/payment-processor";
import { PayPalSDK } from "../third-party/paypal-sdk";

export class PayPalAdapter implements PaymentProcessor {
  private paypalSDK: PayPalSDK;

  constructor(paypalSDK: PayPalSDK) {
    this.paypalSDK = paypalSDK;
  }

  public processPayment(amount: number): void {
    /**
     * The Adapter translates the 'amount' number
     * into the object format the PayPal SDK expects.
     */
    this.paypalSDK.sendPayment({
      value: amount.toFixed(2),
      currency: "USD",
    });
  }
}
