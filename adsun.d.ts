export type ShowPromiseResult = {
  done: boolean;
  description: string;
  state: "load" | "render" | "playing" | "destroy";
  error: boolean;
};

export interface AdController {
  show(): Promise<ShowPromiseResult>;
}

export interface AdsunInitParams {
  blockId: string;
  debug?: boolean;
  debugConsole?: boolean;
  debugBannerType?: "RewardedVideo" | "FullscreenMedia";
}

export interface AdsunGlobal {
  init(params: AdsunInitParams): AdController;
  version?: string;
}

declare global {
  interface Window { Adsun?: AdsunGlobal }
  namespace JSX {
    interface IntrinsicElements {
      "adsun-task": Record<string, unknown> & { "data-block-id": string; "data-debug"?: string };
    }
  }
}
