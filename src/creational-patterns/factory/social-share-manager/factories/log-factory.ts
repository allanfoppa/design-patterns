import { LogShare } from "../interfaces/log-share";
import { InstagramLog } from "../features/instagram/instagram-log";
import { ThreadsLog } from "../features/threads/threads-log";

type LogConstructor = new () => LogShare;

const logRegistry: Record<string, LogConstructor> = {
  instagram: InstagramLog,
  threads: ThreadsLog,
};

export class LogFactory {
  public static createLogger(platform: string): LogShare | null {
    const LoggerClass = logRegistry[platform.toLowerCase()];

    return LoggerClass ? new LoggerClass() : null;
  }
}
