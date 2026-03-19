import { PaymentProcessor } from "./interfaces/payment-processor";
import { PayPalSDK } from "./third-party/paypal-sdk";
import { PayPalAdapter } from "./adapters/paypal-adapter";
import { MercadoPagoAdapter } from "./adapters/mercado-pago-adapter";
import { MercadoPagoSDK } from "./third-party/mercado-pago-sdk";

/**
 * Client code that uses the PaymentProcessor interface.
 */
function runCheckout(processor: PaymentProcessor) {
  processor.processPayment(150.5);
}

// Setup the Adapter
const ppSDK = new PayPalSDK();
const ppAdapter = new PayPalAdapter(ppSDK);

const mpSDK = new MercadoPagoSDK();
const mpAdapter = new MercadoPagoAdapter(mpSDK);

// Run
runCheckout(ppAdapter);
runCheckout(mpAdapter);
