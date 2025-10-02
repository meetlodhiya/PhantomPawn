import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import path from "path"; // <-- import here

const cartographerPlugin =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? require("@replit/vite-plugin-cartographer").cartographer()
    : null;

const devBannerPlugin =
  process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
    ? require("@replit/vite-plugin-dev-banner").devBanner()
    : null;

export default defineConfig({
  base: "/PhantomPawn/", // base path for GitHub Pages

  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(cartographerPlugin && devBannerPlugin ? [cartographerPlugin, devBannerPlugin] : []),
  ],
  root: "client",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'), // alias configuration
    },
  },
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
