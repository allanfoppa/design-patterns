import { SocialShareManager } from "../../managers/social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { WhatsApp } from "./whatsapp";

export class WhatsAppManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new WhatsApp();
  }
}
