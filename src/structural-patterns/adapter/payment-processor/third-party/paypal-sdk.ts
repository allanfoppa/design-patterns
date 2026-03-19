export class PayPalSDK {
  public sendPayment(details: { value: string; currency: string }): void {
    console.log(
      `PayPal: Processing payment of ${details.value} ${details.currency}`,
    );
  }
}
