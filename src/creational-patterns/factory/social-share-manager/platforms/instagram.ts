import { SocialPlatform } from "../interfaces/social-plataform";

// CONCRETE PRODUCT
export class Instagram implements SocialPlatform {
  share(content: string): string {
    return `Posting to Feed ${content} on Instagram...`;
  }
}
