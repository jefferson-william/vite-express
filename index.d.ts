/// <reference types="node" />
/// <reference types="node" />
import core from "express-serve-static-core";
import http from "http";
import https from "https";
declare const Config: {
    mode: "production" | "development";
    vitePort: number;
    viteHost: string;
    viteServerSecure: boolean;
};
declare function config(config: Partial<typeof Config>): void;
declare function bind(app: core.Express, server: http.Server | https.Server, callback?: () => void): Promise<void>;
declare function listen(app: core.Express, port: number, callback?: () => void): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
declare function build(): Promise<void>;
declare const _default: {
    config: typeof config;
    bind: typeof bind;
    listen: typeof listen;
    build: typeof build;
};
export default _default;
