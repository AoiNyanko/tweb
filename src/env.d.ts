/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly VITE_API_ID: string;
  readonly VITE_API_HASH: string;
  readonly VITE_PUSH_SERVER_KEY: string;
  readonly VITE_VERSION: string;
  readonly VITE_VERSION_FULL: string;
  readonly VITE_BUILD: string;
  readonly VITE_SITE_TITLE: string;
  readonly VITE_SITE_DESCRIPTION: string;
  readonly VITE_SITE_ORIGIN: string;
  readonly VITE_PUBLIC_BASE_PATH: string;
  readonly VITE_MTPROTO_WORKER: string;
  readonly VITE_MTPROTO_SW: string;
  readonly VITE_MTPROTO_HTTP: string;
  readonly VITE_MTPROTO_HTTP_UPLOAD: string;
  readonly VITE_MTPROTO_AUTO: string;
  readonly VITE_MTPROTO_HAS_HTTP: string;
  readonly VITE_MTPROTO_HAS_WS: string;
  readonly VITE_MTPROTO_PROXY_ORIGIN: string;
  readonly VITE_MTPROTO_PROXY_PATH: string;
  readonly VITE_SAFARI_PROXY_WEBSOCKET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
