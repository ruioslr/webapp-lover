declare module 'antd-theme-webpack-plugin';
declare module 'slash';

declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.html';
declare module 'omit.js';
declare module 'react-copy-to-clipboard';
declare module 'react-fittext';
declare module '@antv/data-set';
declare module 'nzh/cn';
declare module 'webpack-theme-color-replacer';
declare module 'webpack-theme-color-replacer/client';
declare module 'signals';

declare module 'ace-builds/src-min-noconflict/ext-language_tools';
declare module 'querystring';

// google analytics interface
interface GAFieldsObject {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
}
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
  log: Log;
}

type Log = (...arg: any[]) => void;

declare let ENV: string;

declare let BASE_URL: string;

declare let VERSION: string;

declare let REDIRECT_URL: string;

declare let APPID: string;

declare let log: Log;

declare let ga: Function;

declare interface Window {
  g_app: any;
  G: any;
  g_plugins: any;
}
