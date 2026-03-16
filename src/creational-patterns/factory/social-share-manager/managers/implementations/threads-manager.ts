import { SocialShareManager } from "../social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { Threads } from "../../platforms/threads";

export class ThreadsManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new Threads();
  }
}
