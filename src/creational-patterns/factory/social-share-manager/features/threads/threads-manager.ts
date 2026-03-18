import { SocialShareManager } from "../../managers/social-share-manager";
import { SocialPlatform } from "../../interfaces/social-plataform";
import { Threads } from "../../features/threads/threads";

export class ThreadsManager extends SocialShareManager {
  public getSocialPlatform(): SocialPlatform {
    return new Threads();
  }

  public getName(): string {
    return "Threads";
  }
}
