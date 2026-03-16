import { SocialPlatform } from "../interfaces/social-plataform";

// CONCRETE PRODUCT
export class Threads implements SocialPlatform {
  share(content: string): string {
    return `Sharing ${content} on Threads...`;
  }
}
