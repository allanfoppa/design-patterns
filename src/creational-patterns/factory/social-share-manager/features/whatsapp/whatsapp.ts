import { SocialPlatform } from "../../interfaces/social-plataform";

// CONCRETE PRODUCT
export class WhatsApp implements SocialPlatform {
  share(content: string): string {
    return `Sharing ${content} on WhatsApp...`;
  }

  getName(): string {
    return "WhatsApp";
  }
}
