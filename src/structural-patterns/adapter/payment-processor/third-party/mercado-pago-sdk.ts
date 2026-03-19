export interface MercadoPagoRequest {
  transaction_id: string;
  amount: number;
}

export class MercadoPagoSDK {
  public authorizeAndPost(data: MercadoPagoRequest, token: string): void {
    console.log(
      `[MercadoPago API] Token Validated: ${token.substring(0, 8)}...`,
    );
    console.log(
      `[MercadoPago API] Transaction ${data.transaction_id} processed for $${data.amount}`,
    );
  }
}
