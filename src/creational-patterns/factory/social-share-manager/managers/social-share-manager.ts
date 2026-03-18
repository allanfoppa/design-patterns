import { SocialPlatform } from "../interfaces/social-plataform";
import { LogFactory } from "../factories/log-factory";

export abstract class SocialShareManager {
  // THE FACTORY METHOD
  public abstract getSocialPlatform(): SocialPlatform;

  // SOME BUSINESS LOGIC
  public notify(content: string): string {
    const platform = this.getSocialPlatform();
    const result = platform.share(content);

    console.log("Notification Process Started...");
    const logger = LogFactory.createLogger(platform.getName());
    logger?.log();
    console.log(result);
    console.log("Notification Process Finished.\n");
    return result;
  }
}
