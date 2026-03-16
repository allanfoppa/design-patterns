import { SocialPlatform } from "../interfaces/social-plataform";

// CONCRETE PRODUCT
export class Whatsapp implements SocialPlatform {
  share(content: string): string {
    return `Sharing ${content} on Whatsapp...`;
  }
}
