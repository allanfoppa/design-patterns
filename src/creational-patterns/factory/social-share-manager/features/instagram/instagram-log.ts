import { LogShare } from "../../interfaces/log-share";

export class InstagramLog implements LogShare {
  log(): void {
    console.log("LOG: Instagram share tracked.");
  }
}
