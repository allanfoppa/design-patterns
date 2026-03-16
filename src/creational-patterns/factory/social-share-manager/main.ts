import { SocialShareManager } from "./managers/social-share-manager";
import { InstagramManager } from "./managers/implementations/instagram-manager";
import { WhatsappManager } from "./managers/implementations/whatsapp-manager";
import { ThreadsManager } from "./managers/implementations/threads-manager";

function runSharing(manager: SocialShareManager) {
  manager.notify("Check out my new design patterns project!");
}

// The application chooses the manager based on user input or config
console.log("User selected Instagram:");
runSharing(new InstagramManager());

console.log("User selected Whatsapp:");
runSharing(new WhatsappManager());

console.log("User selected Threads:");
runSharing(new ThreadsManager());
