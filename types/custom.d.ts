// custom.d.ts or similar file
import 'react';

// 自訂擴充 React 支援的 iframe 屬性，確保 webkitallowfullscreen 等能輸出到 HTML
declare module 'react' {
  interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitallowfullscreen?: string;
    mozallowfullscreen?: string;
    allowtransparency?: string;
  }
}
