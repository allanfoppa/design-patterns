import { PaymentProcessor } from "../interfaces/payment-processor";
import { MercadoPagoSDK } from "../third-party/mercado-pago-sdk";
import crypto from "crypto";

export class MercadoPagoAdapter implements PaymentProcessor {
  private sdk: MercadoPagoSDK;
  // In a real-world scenario, this token would be securely stored and retrieved, not hardcoded.
  private readonly authToken = "APP_USR-778899112233-MOCK";

  constructor(sdk: MercadoPagoSDK) {
    this.sdk = sdk;
  }

  public processPayment(amount: number): void {
    // 1. Data Augmentation: Create the ID the SDK requires
    const randomId = crypto.randomUUID();

    // 2. Translation: Format the data into the SDK's expected object
    const requestData = {
      transaction_id: randomId,
      amount: amount,
    };

    // 3. Execution: Call the incompatible SDK
    this.sdk.authorizeAndPost(requestData, this.authToken);
  }
}
