export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAIL: string;
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
    }
  }
}
