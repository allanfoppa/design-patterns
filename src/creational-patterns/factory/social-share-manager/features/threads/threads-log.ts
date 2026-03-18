import { LogShare } from "../../interfaces/log-share";

export class ThreadsLog implements LogShare {
  log(): void {
    console.log("LOG: Threads share tracked.");
  }
}
