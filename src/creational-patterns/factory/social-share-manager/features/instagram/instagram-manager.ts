import { SocialShareManager } from "../../managers/social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { Instagram } from "../../features/instagram/instagram";

export class InstagramManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new Instagram();
  }
}
