import { SocialShareManager } from "../social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { Whatsapp } from "../../platforms/whatsup";

export class WhatsappManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new Whatsapp();
  }
}
