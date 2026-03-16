import { SocialShareManager } from "../social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { Instagram } from "../../platforms/instagram";

export class InstagramManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new Instagram();
  }
}
