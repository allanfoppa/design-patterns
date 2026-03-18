import { SocialShareManager } from "./managers/social-share-manager";
import { InstagramManager } from "./features/instagram/instagram-manager";
import { WhatsAppManager } from "./features/whatsapp/whatsapp-manager";
import { ThreadsManager } from "./features/threads/threads-manager";

function runSharing(manager: SocialShareManager) {
  manager.notify("Check out my new design patterns project!");
}

// The application chooses the manager based on user input or config
console.log("User selected Instagram:");
runSharing(new InstagramManager());

console.log("User selected WhatsApp:");
runSharing(new WhatsAppManager());

console.log("User selected Threads:");
runSharing(new ThreadsManager());
