// The interface defines the operations that all concrete products must implement.
// Define how every social network should behave.
export interface SocialPlatform {
  share(content: string): string;
  getName(): string;
}
